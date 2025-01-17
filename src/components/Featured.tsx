import SectionHeader from "./sectionHeader";
import ps5 from "../images/ps5.png";
import woman from "../images/womanWithHat.png";
import speaker from "../images/speaker.png";
import perfume from "../images/perfume.png";



export default function Featured() {
    return(
        <div className="Featured  my-5">
            <div className="container">
                <SectionHeader title="Featured" />
                <h2 className="text-5xl my-5 font-semibold max-sm:text-4xl max-sm:text-center">New Arrival</h2>
                <div className="content text-white grid gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 grid-rows-2 grid-cols-4">
                    <div className="left relative max-sm:col-span-1 row-span-2 col-span-2 flex justify-center items-end bg-black overflow-hidden">
                        <div className="text absolute left-7 bottom-7 pb-5 pl-5 w-[600px]">
                            <h3 className="text-2xl font-semibold w-[230px]">PlayStation 5</h3>
                            <p className="w-[230px] text-sm my-3">Black and White version of the PS5 coming out on sale.</p>
                            <button className="border-b border-white/60">Shop Now</button>
                        </div>
                        <img src={ps5} alt="ps5" />
                    </div>
                    <div className="topRight relative max-sm:col-span-1 row-span-1 col-span-2 flex justify-between items-end bg-black overflow-hidden">
                        <div className="text max-sm:absolute pb-5 pl-5 ">
                            <h3 className="text-2xl font-semibold max-2xl:text-xl ">Women’s Collections</h3>
                            <p className="w-[230px] max-2xl:w-[190px] text-sm my-3">Featured woman collections that give you another vibe.</p>
                            <button className="border-b border-white/60">Shop Now</button>
                        </div>
                        <img src={woman} alt="woman" />
                        
                    </div>
                    <div className="bottomRight relative max-sm:col-span-1 row-span-1 col-span-1 flex justify-center items-end bg-black overflow-hidden">
                    <div className="text absolute left-2 bottom-2 text-white/85 pb-5 pl-5 w-[600px]">
                            <h3 className="text-2xl font-semibold w-[230px]">Speakers</h3>
                            <p className="w-[230px] text-sm my-3">Amazon wireless speakers</p>
                            <button className="border-b border-white/60">Shop Now</button>
                        </div>
                        <img src={speaker} alt="speaker" />
                    </div>
                    <div className="bottomRight relative max-sm:col-span-1 row-span-1 col-span-1 flex justify-center items-end bg-black overflow-hidden">
                    <div className="text absolute left-2 bottom-2 text-white/85 pb-5 pl-5 w-[600px]">
                            <h3 className="text-2xl font-semibold w-[230px]">Perfume</h3>
                            <p className="w-[230px] text-sm my-3">GUCCI INTENSE OUD EDP</p>
                            <button className="border-b border-white/60">Shop Now</button>
                        </div>
                        <img src={perfume} alt="perfume" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}