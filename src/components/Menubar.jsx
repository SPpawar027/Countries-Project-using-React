import React from "react";

export const Menubar = () => {
  return (
    <div className="p-2 mr-12 mt-8">
      <select
        name="Filter by Region"
        
        className="p-3 outline-none border border-gray-200 shadow-md"
      >
        <option value="">Filter by Region</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};
