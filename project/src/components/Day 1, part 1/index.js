import React from "react";

import data from "./data";

const newData = [];

const dataVal = data.forEach(number => {
  const value = Math.floor(number / 3) - 2;
  newData.push(value);
});

const reducedValue = data => data.reduce((a, b) => a + b, 0);

const neededFuelForModules = reducedValue(newData);

const Day1Part2 = () => {
  //Total Fuel For modules on Ship
  const baseFuel = neededFuelForModules;
  // //After dividing by 3, rounding down, and subtracting 2
  // const StopIfWeDontNeedMoreFuel = 0;
  //We will return this array out of function scope into global scope
  const d1p2Arr = [baseFuel];
  //We will not return this array out of function scope into global scope
  const d1p2Array = [baseFuel];
  // //What will be used in the do/while loop as the condition check to make sure we dont go beyond 0
  // const subtractingBaseFuel = [baseFuel];
  //Our reducer function to ADD to the over all fuel count
  const addValue = data => data.reduce((a, b) => a + b, 0);
  //Our reducer function to SUBTRACT from the over all fuel count
  const subtractValue = data => data.reduce((a, b) => a - b, 0);

  do {
    var addTod1p2 = Math.floor(d1p2Arr / 3) - 2;
    d1p2Arr.push(addTod1p2);
    d1p2Array.push(addTod1p2);
    addValue(d1p2Arr);
    subtractValue(d1p2Arr);
  } while (d1p2Array !== 0);
};

export function FuelData() {
  return (
    <div className="fuelData">
      <div className="handleEachNumber">
        <p className="explanatoryText">
          We are solving this{" "}
          <a
            href="https://adventofcode.com/2019/day/1"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            problem
          </a>
          below
        </p>
      </div>
      <div className="handleReduce">
        {" "}
        <p className="answerToProblem">
          The sum of the fuel requirements for all of the modules on my
          spacecraft is <b>{neededFuelForModules.toLocaleString()}</b>
        </p>{" "}
      </div>
    </div>
  );
}

export function TotalFuelData() {
  return (
    <div className="fuelData">
      <div className="handleEachNumber">
        <p className="explanatoryText">
          Now we need to solve the following problem
        </p>
        <ul>
          <li>
            During the second Go / No Go poll, the Elf in charge of the Rocket
            Equation Double-Checker stops the launch sequence. Apparently, you
            forgot to include additional fuel for the fuel you just added.{" "}
          </li>
          <li>
            Fuel itself requires fuel just like a module - take its mass, divide
            by three, round down, and subtract 2. However, that fuel also
            requires fuel, and that fuel requires fuel, and so on. Any mass that
            would require negative fuel should instead be treated as if it
            requires zero fuel; the remaining mass, if any, is instead handled
            by wishing really hard, which has no mass and is outside the scope
            of this calculation.
          </li>
          <li>
            So, for each module mass, calculate its fuel and add it to the
            total. Then, treat the fuel amount you just calculated as the input
            mass and repeat the process, continuing until a fuel requirement is
            zero or negative.
          </li>
          <li>
            What is the sum of the fuel requirements for all of the modules on
            your spacecraft when also taking into account the mass of the added
            fuel? (Calculate the fuel requirements for each module separately,
            then add them all up at the end.)
          </li>
        </ul>
      </div>
      <div className="handleReduce">
        {" "}
        <p className="answerToProblem">
          The sum of the fuel requirements for all of the modules on my
          spacecraft is{" "}
          <b>
            <Day1Part2 />
          </b>
        </p>{" "}
      </div>
    </div>
  );
}
