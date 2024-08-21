import React from "react";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { Menubar } from "./components/Menubar";

import { Countriescontainer } from "./components/Countriescontainer";
function App(){

  return (
    <div>
      <Header/>
      <div className="search flex justify-between ">
        <Searchbar/>
        <Menubar/>
      </div>
      <Countriescontainer/>
    </div>
  )
}

export default App;