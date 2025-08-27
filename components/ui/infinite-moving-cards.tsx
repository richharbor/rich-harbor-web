"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { itemsType } from "../Pages/Home/HotSelling/HotSelling";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: itemsType;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "7s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "15s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[99vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          // <li
          //   className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          //   key={item.name}
          // >
          //   <blockquote>
          //     <div
          //       aria-hidden="true"
          //       className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
          //     ></div>
          //     <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
          //       {item.quote}
          //     </span>
          //     <div className="relative z-20 mt-6 flex flex-row items-center">
          //       <span className="flex flex-col gap-1">
          //         <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
          //           {item.name}
          //         </span>
          //         <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
          //           {item.title}
          //         </span>
          //       </span>
          //     </div>
          //   </blockquote>
          // </li>
          <div
            key={item.name}
            className="bg-neutral-900 border border-white/10 rounded-3xl p-6 min-w-[250px] max-sm:min-w-[150px] flex-shrink-0"
          >
            <div className="flex justify-center">
              <Image
                className="size-24 max-sm:size-15"
                src={item.icon}
                alt={`${item.name}-icon`}
              />
            </div>
            <h3 className="text-3xl max-sm:text-xl text-center mt-6 ">
              {item.name}
            </h3>
            <p className="text-center text-white/50 mt-2 ">
              {item.sector}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};
