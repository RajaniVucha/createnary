import React from "react";
import Range from "./Range";

function Calculator() {
  return (
    <div className="calculator">
      <div className="calculator-container">
        <h1>Estimated Earning Potential</h1>
        <div className="calculator-main">
          <div className="calculator-influencer">
            <p>What kind of influencer you are?</p>
            <select name="influencer" className="select">
              <option value="select influencer">Select Influencer</option>
            </select>
            <p>How many followers do you have?</p>
            <Range />
            <p>How many products do you list daily?</p>
            <Range />
          </div>
          <div className="calculator-result">
            <h1>Monthly Earnings</h1>
            <p>
              <h3>12000</h3>
            </p>
            <br />
            <h1>Yearly Earnings</h1>
            <p>
              <h3>144000</h3>
            </p>
          </div>
        </div>
        <div>
          <button className="button" name="calculator">
            Calculator
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
