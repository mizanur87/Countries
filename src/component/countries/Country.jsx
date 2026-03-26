import React from "react";

const Country = ({ countryS }) => {
  console.log(countryS);

  const handleVisited = () => {
    console.log("Clicked Visited");
  };
  return (
    <div className=" ">
      <div className="rounded-lg flex flex-col p-5 justify-center items-center border-2">
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
          Visited
        </button>
      </div>
    </div>
  );
};

export default Country;
