import React from "react";


export const Searchbar = ()=>{

    return (
        <div className=" ml-10 mt-6 relative ">
            <i className="ri-search-line ml-2 mt-2 absolute text-2xl"></i>
            <input type="text" className="pl-10 pt-3 pb-2 border w-80 outline-none shadow-md font-mono  border-gray-400" placeholder="Search for a country ...."/>
        </div>
    )
}