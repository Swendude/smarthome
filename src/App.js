import "./App.css";
import LampControl from "./components/LampControl";
import { useSelector } from "react-redux";
import { selectLamps } from "./store/smarthome/selector";
import RadioControl from "./components/RadioControl";
import ThermostatControl from "./components/ThermostatControl";
import { selectPUConsumption } from "./store/smarthome/selector";
function App() {
  const lamps = useSelector(selectLamps);
  const PUConsumption = useSelector(selectPUConsumption);
  return (
    <div className="App">
      <h1>Smart Home</h1>
      <p>Total PU consumption: {PUConsumption}</p>
      {lamps.map((lamp, i) => (
        <LampControl key={i} lamp={lamp} />
      ))}
      <RadioControl />
      <ThermostatControl />
    </div>
  );
}

export default App;
