import { Suspense } from "react";
import "./App.css";
import Countries from "./component/Countries";
import "./index.css";

const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
};

function App() {
  const promiseCountries = fetchCountries();
  return (
    <>
      <div className="container mx-auto text-center  mt-10">
        <Suspense fallback={<h1>Loading data..</h1>}>
          <Countries promiseCountries={promiseCountries}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App;
