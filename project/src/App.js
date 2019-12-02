import React from "react";

import { FuelData, TotalFuelData } from "./components/Day 1, part 1/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="mainHeader">Placeholder for eventual routing</header>
      <section className="mainHeading">
        <h1> This is the project file for the Advent of Code, 2019</h1>
      </section>
      <section className="body">
        {/* <h2 className="daySelector">Please choose a day of the month</h2> */}
        <div className="day1">
          <h2 className="day1Title">Day 1</h2>
          <section className="daySectionBody">
            <FuelData />
            <TotalFuelData />
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
