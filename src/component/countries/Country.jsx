import React, { useState } from "react";

const Country = ({ countryS, vCountry }) => {
  console.log(vCountry);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }

    vCountry();
  };
  return (
    <div className=" ">
      <div
        className={`rounded-lg flex flex-col p-5 justify-center items-center border-2 ${visited && "bg-green-900"}`}
      >
        <img
          className="w-[50%] h-[50%]"
          src={countryS.flags.flags.png}
          alt=""
        />
        <h1 className="font-bold  ">Name: {countryS.name.common}</h1>
        <p>Polulation: {countryS.population.population}</p>
        <p>Capital: {countryS.capital.capital}</p>
        <p>Region: {countryS.region.region}</p>
        <p>
          Area: {countryS.area.area}{" "}
          {countryS.area.area > 300000 ? "Big Country" : "Small Country"}
        </p>
        <button onClick={handleVisited} className="btn">
          {visited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Country;
