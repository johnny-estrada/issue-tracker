const Select = () => {
  return (
    <div>
      <label htmlFor="cars">Choose a car:</label>
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
