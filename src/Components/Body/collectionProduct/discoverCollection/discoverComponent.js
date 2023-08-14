import { SiNike, SiUnderarmour, SiNewbalance, SiPuma } from "react-icons/si"
import { CgAdidas } from "react-icons/cg"
import DiscoverCard from "./discoverCardComponent"





const DiscoverComponent = () => {
    return (
        <div className="mt-2 pb-2 mx-auto">
            <div className="flex justify-between max-w-[90%] m-auto w-full rounded-lg">
                <h1 className="text-black  m-auto py-4">#Discover</h1>
            </div>

            <div className="flex justify-between max-w-[80%] gap-2 mx-auto w-full rounded-lg pb-2">
                <button className="bg-emerald-950 text-white 
                hover:bg-emerald-800
                p-2 rounded-3xl w-96 flex justify-center">
                    <p className="text-white whitespace-nowrap my-auto text-sm">#Tin nổi bật</p>
                </button>

                <button className="bg-emerald-950 text-white 
                hover:bg-emerald-800
                p-2 rounded-3xl w-96 flex justify-center">
                    <p className="text-white whitespace-nowrap my-auto text-sm">#Tin khuyến mại</p>
                </button>

                <button className="bg-emerald-950 text-white 
                hover:bg-emerald-800
                p-2 rounded-3xl w-96 flex justify-center">
                    <p className="text-white whitespace-nowrap my-auto text-sm">#Mẹo thời trang</p>
                </button>
            </div >

            <div className="grid gap-3 m-auto max-w-[95%] justify-between mb-1 mt-4 
            lg:grid-rows-2
            lg:grid-cols-2

            grid-rows-2
            grid-cols-2
            
            min-[1352px]:grid-cols-4
            min-[1352px]:grid-rows-1
            min-[1352px]:max-w-[95%]
            ">
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
            </div>
        </div>
    )
}

export default DiscoverComponent