import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { title } from "process";

export function Testimonials2() {
    const testimonials = [
        {
            quote:
                "I compared multiple platforms before investing, and Richharbor consistently offered the lowest pricing on unlisted shares. It gave me the confidence that I was getting the best value for my money.",
            name: "Amit S.",
            designation: "HNI Investor",
            title:'Lowest Pricing',
            src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The team at Richharbor delivered my shares exactly on the committed date. Their focus on timely delivery makes them a trustworthy partner for serious investors like me.",
            name: "Priya K.",
            designation: "Private Banker",
            title:"Timely Share Delivery",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "From placing the order to final settlement, everything was smooth, transparent, and standardized. Richharbor has made unlisted share investing as simple as investing in listed stocks.",
            name: "Rahul M.",
            title:"Smooth & Standard Process",
            designation: "NRI Investor",
            src: "https://i.pinimg.com/736x/76/53/16/765316b12b380d310f0aa4c35b80eb4c.jpg",
        },
        {
            quote:
                "What I loved most is how Richharbor helped me not just in buying but also in exiting at the right price. Their team guided me toward better deals and handled everything with complete professionalism.",
            name: "Neha A.",
            designation: "Wealth Manager",
            title:"Assisting in Better Deals & Dual Support (Buy + Sell)",
            src: "https://i.pinimg.com/1200x/1a/00/af/1a00afa29ff7553edd5dae2a5450ebba.jpg",
        },
    ];
    return (
        <div className="flex rounded-2xl flex-col gap-10 max-md:gap-2 h-full mx-auto w-full lg:max-w-screen-xl px-2 lg:px-20 py-10 max-md:py-10">
            <h1 className="text-3xl font-batman mx-20 max-sm:mx-5 md:text-4xl text-center lg:text-5xl font-medium !leading-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground to-neutral-400">Testimonials</h1>
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}

