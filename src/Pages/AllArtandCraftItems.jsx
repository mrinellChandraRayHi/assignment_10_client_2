import { useLoaderData } from "react-router-dom";
import AllArtAndCraftCard from "../Components/AllArtAndCraftCard";
import { useState } from "react";

const AllArtandCraftItems = () => {
    const loadedAllArtandCraftItems=useLoaderData();
    const [allartandcrafts, SetAllartandcrafts]=useState(loadedAllArtandCraftItems)
    return (
        <div>
            <div className="text-center text-9xl bg-blue-500 h-[150px] w-[150px] flex items-center justify-center mx-auto rounded-full text-white my-20">{allartandcrafts.length}</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 p-10">
                {
                    allartandcrafts.map(allartandcraft=><AllArtAndCraftCard key={allartandcraft._id} allartandcraft={allartandcraft} allartandcrafts={allartandcrafts} SetAllartandcrafts={SetAllartandcrafts}/>)
                }
            </div>
        </div>
    );
};

export default AllArtandCraftItems;