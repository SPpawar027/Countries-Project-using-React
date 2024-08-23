import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";


export const CountryDetail = () => {
  const [countdetail, setcountdetail] = useState([]);
  const param = useParams();
  const countrydata = param.country
  const navigate = useNavigate();
  
  function GoBackButton() {
  
    navigate(-1); // Navigate back by 1 page
  


    };
  

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countrydata}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setcountdetail({
          name: data.name.common,
          capital: data.capital,
          population: data.population,
          img: data.coatOfArms.png,
          continents: data.continents,
        });
      });
  }, []);
  return (
    <>
      <button
       onClick={()=>GoBackButton()}
      className="text-xl font-semibold border border-black p-1 bg-gray-50 hover:bg-gray-200 mt-10 ml-24">
        {" "}
        Back{" "}
      </button>
      <div className="w-[70%] h-screen flex mt-20 mx-auto overflow-hidden">
        <img
          className="w-[40%] h-[40%] shadow-lg rounded-xl"
          src={countdetail.img}
          alt=""
        />

        <div className="m-10 ml-20 ">
          <h1 className="text-4xl font-semibold">
            <b>Country :</b>
            {countdetail.name}
          </h1>
          <h2 className="opacity-60 mt-4">
            <b>Capital :</b>
            {countdetail.capital}
          </h2>
          <h2 className="text-xl font-medium mt-3 text-red-400">
            <b> Population :</b>
            {countdetail.population?.toLocaleString("EN-IN")}
          </h2>
          <p className="text-zinc-700 font-light mt-3">
            {" "}
            <b> continent :</b> {countdetail.continents}
          </p>
        </div>
      </div>
    </>
  );
};
