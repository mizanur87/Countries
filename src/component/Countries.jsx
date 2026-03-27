import React, { use, useState } from "react";
import Country from "./countries/country";
const Countries = ({ promiseCountries }) => {
  const [visitedCountry, setvisitedCountry] = useState([]);

  const vCountry = (countryS) => {
    console.log("Visited Country Button", countryS);
    const newVisitedCountriess = [...visitedCountry, countryS];
    setvisitedCountry(newVisitedCountriess);
  };

  const promise = use(promiseCountries);
  const counti = promise.countries;
  console.log(promise);
  return (
    <>
      <h1 className="font-black text-[50px]">
        Total countries: {counti.length}
      </h1>
      <h2 className="my-5 font-bold">
        Total country Visited:{visitedCountry.length}
      </h2>
      <div className=" grid grid-cols-3 justify-center items-center gap-5">
        {counti.map((countryS) => (
          <Country
            key={countryS.ccn3.ccn3}
            countryS={countryS}
            vCountry={vCountry}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
