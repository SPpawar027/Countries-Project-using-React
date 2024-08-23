import React, { useEffect, useState } from "react";
import { Countriescard } from "./Countriescard";
import { Shimmer } from "./Shimmer";
import { Loading } from "./Loading";

export const Countriescontainer = ({ query }) => {
  const [Countriesdata, setCountriesdata] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json()) // Corrected the json method invocation
      .then((data) => {
        setCountriesdata(data);
        // Optionally log the data to ensure it is correct
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error); // Handle errors if the fetch fails
      });
  }, []);

  const filteredCountries = Countriesdata.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) 

  ).map((country, i) => {
    return (
      <Countriescard
        key={i}
        name={country.name.common}
        capital={country.capital}
        flag={country.flags.png}
        population={country.population.toLocaleString("en-IN")}
        continents={country.continents}
      />
    );
  });

  return (
    <div className="w-full  mt-10 flex gap-12 flex-wrap justify-center">
      {filteredCountries}
    </div>
  );
};
