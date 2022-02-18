import { useSelector, useDispatch } from "react-redux";
import { selectRadio } from "../store/smarthome/selector";
import { toggleRadio, setRadioGenre } from "../store/smarthome/actions";
import { useState } from "react";

const RadioControl = () => {
  const dispatch = useDispatch();
  const radio = useSelector(selectRadio);
  const [genre, setGenre] = useState("");
  return (
    <div>
      <h3>Radio</h3>
      <p>{radio.power ? "ON" : "OFF"}</p>
      <button onClick={() => dispatch(toggleRadio)}>Switch</button>
      <p>Genre: {radio.genre}</p>
      <input value={genre} onChange={(event) => setGenre(event.target.value)} />
      <button onClick={() => dispatch(setRadioGenre(genre))}>Set genre</button>
    </div>
  );
};

export default RadioControl;
