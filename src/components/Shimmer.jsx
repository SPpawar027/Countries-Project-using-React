import React from "react";

export const Shimmer = ()=>{

    return(
        <div className=" w-60  p-4 border border-gray-300 rounded-md shadow-md hover:scale-105 duration-500 cursor-pointer">
            <div className="rounded-md h-[150px] bg-gray-300" ></div>
            <div className="flex flex-col gap-2 mt-2 ">
                <div className="w-10 h-5 bg-gray-300"></div>
                <div className="w-10 h-5 bg-gray-300"></div>
                <div className="w-10 h-5 bg-gray-300"></div>
                <div className="w-10 h-5 bg-gray-300"></div>
            </div>
        </div>
    )
}