import React from "react";
import "./ChooseOptn.css";

const ChooseOptn = () => {
  return (
    <>
      <div className="choose-container">
          <h1>choose your milk</h1>
          <select>
              <option value="Semi-Skimmed Milk">Semi-Skimmed Milk</option>
              <option value="Mango Shake">Mango Shake</option>
              <option value="Pine Apple Juice">Pine Apple Juice</option>
          </select>
      </div>
    </>
  );
};

export default ChooseOptn;
