import React from "react";

export const Countriescard = ( {name ,capital ,flag ,population ,continents} ) => {
  return <div className="w-60 p-4 border border-gray-300 rounded-md shadow-md hover:scale-105 duration-500 cursor-pointer">
        <img className="rounded-md h-[150px]" src={flag} alt="flag" />
        <div className="flex flex-col gap-2 mt-2">
        <p><b>Population : </b>{population}</p>
        <p><b>Name :</b> {name}</p>
        <p><b>Capital :</b> {capital}</p>
        <p><b>continents :</b> {continents}</p>


        </div>
  </div>;
};
