import React from "react";

export const Header = () => {
  return (
    <>
      <div className="p-6 flex justify-between ">
        <h2 className="text-2xl font-bold ml-4">Where in the world ?</h2>
        <p className="mr-6 font-semibold">
          <i className="ri-moon-clear-line text-2xl mr-2"></i> dark Mode
        </p>
      </div>
      <hr className="border-t-2 border-gray-300 shadow-md" />
    </>
  );
};
