import React, { useState } from "react";
import { Searchbar } from "./Searchbar";
import { Countriescontainer } from "./Countriescontainer";
import { Header } from "./Header";
import { Menubar } from "./Menubar";

export const Home = () => {
  const [query, setquery] = useState("");

  return (
    <>
      <div>
       
        <div className="search flex justify-between ">
          <Searchbar setquery={setquery} />
          <Menubar />
        </div>
        <Countriescontainer query={query} />
      </div>
    </>
  );
};
