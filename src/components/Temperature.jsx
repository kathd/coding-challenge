import React, { useState } from "react";
import "../styles/temperature.css"

const Temperature = () => {
  const [temperature, setTemperature] = useState(0);

  const tempChange = e => {
      setTemperature(+e.target.value)
  }

  return (
    <div className="temperature flex-column page">
      <label htmlFor="temperature">Temperature</label>
      <input
        type="number"
        id="temperature"
        name="temperature"
        placeholder="Temperature in °C"
        min={0}
        max={50}
        value={temperature}
        onChange={tempChange}
      />
      <div>
        {temperature < 10 && (<p style={{color:"dodgerblue"}}>It's cold ❄️</p>)}
        {temperature >= 10 && temperature < 30 && (<p style={{color:"black"}}>It's nice 🌼</p>)}
        {temperature >= 30 && (<p style={{color:"firebrick"}}>It's warm ☀️</p>)}
      </div>
    </div>
  );
};

export default Temperature;
