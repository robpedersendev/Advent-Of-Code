import React from "react";

import data from "./data";

const newData = [];

const reducedValue = data => data.reduce((a, b) => a + b, 0);

function FuelData() {
  return (
    <div className="fuelData">
      <div className="handleEachNumber">
        {data.forEach(number => {
          const value = Math.floor(number / 3) - 2;
          newData.push(value);
        })}
        <p className="explanatoryText">
          You dont know this, but within this div, I am doing the math, and
          finding out the answer to this{" "}
          <a
            href="https://adventofcode.com/2019/day/1"
            target="_blank"
            without
            rel="noopener noreferrer"
          >
            problem
          </a>
        </p>
      </div>
      <div className="handleReduce">
        {" "}
        <p className="answerToProblem">
          The sum of the fuel requirements for all of the modules on my
          spacecraft is <b>{reducedValue(newData).toLocaleString()}</b>
        </p>{" "}
      </div>
    </div>
  );
}

export default FuelData;
