import React from "react";
import Countriesdata from "../utils/Countriesdata";
import { Countriescard } from "./Countriescard";

export const Countriescontainer = () => {
  const arr = Countriesdata.map((country) => {
    console.log(country);
    return (
      <Countriescard name={country.name.common} capital={country.capital} 
      flag={country.flags.png} population = {country.population} continents = {country.continents}
      />
    );
  });

  return (
    <div className=" w-full h-screen mt-10 flex gap-12 flex-wrap justify-center">
      {arr}
    </div>
  );
};
