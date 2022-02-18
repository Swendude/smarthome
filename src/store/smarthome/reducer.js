const initialState = {
  lamps: [
    { id: 1, power: false },
    { id: 2, power: false },
    { id: 3, power: false },
    { id: 4, power: false },
  ],
  radio: { genre: "classic rock", power: false },
  thermostat: 20,
};

// lamps.map(lamp => HTML dispatch(toggleLamp(lamp_id)))

export default function reducer(state = initialState, action) {
  console.log("home reducer reveived", action);
  switch (action.type) {
    case "home/toggleLamp": {
      return {
        ...state,
        lamps: state.lamps.map((lamp) => {
          if (lamp.id === action.payload.lamp_id) {
            return { ...lamp, power: !lamp.power };
          } else {
            return lamp;
          }
        }),
      };
    }
    case "home/toggleRadio": {
      return {
        ...state,
        radio: { ...state.radio, power: !state.radio.power },
      };
    }
    case "home/setRadioGenre": {
      return {
        ...state,
        radio: { ...state.radio, genre: action.payload.new_genre },
      };
    }
    case "home/setThermostatTemp": {
      return {
        ...state,
        thermostat: parseInt(action.payload.new_temp),
      };
    }
    default: {
      return state;
    }
  }
}
