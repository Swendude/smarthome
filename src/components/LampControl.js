import { useDispatch } from "react-redux";
import { toggleLamp } from "../store/smarthome/actions";

const LampControl = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="lamp-control">
      <h3>Lamp {props.lamp.id}</h3>
      <p>{props.lamp.power ? "ON" : "OFF"}</p>
      <button onClick={() => dispatch(toggleLamp(props.lamp.id))}>
        Switch
      </button>
    </div>
  );
};

export default LampControl;
