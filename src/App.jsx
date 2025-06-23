import { useState } from "react";

import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMesssage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    // validation fro digits
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      // calculating bmi status
      if (bmiValue < 18.5) setBmiStatus("Under weight");
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setBmiStatus("Normal");
      else if (bmiValue >= 24.9 && bmiValue < 29.9) setBmiStatus("Over weight");
      else setBmiStatus("Obese");

      // empty the error message bcoz for previous operation some error may shown
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage(
        "Please enter the valid numeric details for height and weight"
      );
    }
  };

  // function for clearing the input and output field
  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  };

  return (
    <>
      <div className="bmi-caluclator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMesssage && <p className="error">{errorMesssage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is:{bmi}</p>
              <p>Status:{bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
