import React from "react";

const Select = () => {
  return (
    <div>
      <label for="cars">Choose a car:</label>
      <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default Select;
