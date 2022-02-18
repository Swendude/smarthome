import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectThermostat } from "../store/smarthome/selector";
import { setThermostatTemp } from "../store/smarthome/actions";
const ThermostatControl = () => {
  const dispatch = useDispatch();
  const thermostat = useSelector(selectThermostat);
  const [temperature, setTemperature] = useState(thermostat);
  return (
    <div>
      <h3>Thermostat</h3>
      <p>{thermostat}</p>
      <div className="temp-slider">
        <input
          type="range"
          value={temperature}
          min={15}
          max={30}
          onChange={(event) => setTemperature(event.target.value)}
        />
        <p>{temperature}</p>
      </div>
      <button onClick={() => dispatch(setThermostatTemp(temperature))}>
        Set temperature
      </button>
    </div>
  );
};

export default ThermostatControl;
