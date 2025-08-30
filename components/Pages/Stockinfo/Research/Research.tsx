'use Client'
import { useState } from "react";
import AboutSection from "./AboutCom/AboutCom";
import Fundamentals from "./Fundamentals/Fundamentals";
import TradingViewWidget from "./StockChart/StockChart";
import SWsection from "./Strength&Weakness/Strength&Weakness";

export default function Research(){

    const [page, setPage] = useState<string>('fundamentals');


    return (
        <div className="flex items-center gap-10 flex-col py-20 px-20 max-md:px-0">
            <div className="w-full flex items-center justify-center">
                <TradingViewWidget />
            </div>
            <div className="flex w-full gap-5 max-sm:gap-2 border-b text-sm">
                <button onClick={()=> setPage('fundamentals')} className={`border-b px-3 py-2 ${page === 'fundamentals'?'border-rich-violet':'cursor-pointer'} `}>Fundamentals</button>
                <button onClick={()=> setPage('strength&weakness')} className={`border-b px-3 py-2 ${page === 'strength&weakness'?'border-rich-violet':'cursor-pointer'}`}>Strength & Weakness</button>
                <button onClick={()=> setPage('about')} className={`border-b px-3 py-2 ${page === 'about'?'border-rich-violet':'cursor-pointer'}`}>About Co.</button>
            </div>
            
            {/* <Fundamentals />
            <SWsection />
            <AboutSection /> */}
            <div className="w-full">
                {page === 'fundamentals' && <Fundamentals />}
                {page === 'strength&weakness' && <SWsection />}
                {page === 'about' && <AboutSection />}
            </div>
        </div>
    )
}