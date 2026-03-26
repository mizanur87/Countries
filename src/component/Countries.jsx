import React, { use } from "react";
import Country from "./countries/country";
const Countries = ({ promiseCountries }) => {
  const promise = use(promiseCountries);
  const counti = promise.countries;
  console.log(promise);
  return (
    <>
      <h1 className="font-black text-[50px]">
        Total countries: {counti.length}
      </h1>
      <div className=" grid grid-cols-3 justify-center items-center gap-5">
        {counti.map((countryS) => (
          <Country key={countryS.ccn3.ccn3} countryS={countryS}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
