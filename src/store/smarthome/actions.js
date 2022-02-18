export const toggleLamp = (lamp_id) => ({
  type: "home/toggleLamp",
  payload: { lamp_id: lamp_id },
});

export const toggleRadio = {
  type: "home/toggleRadio",
};

export const setRadioGenre = (new_genre) => ({
  type: "home/setRadioGenre",
  payload: { new_genre: new_genre },
});

export const setThermostatTemp = (new_temp) => ({
  type: "home/setThermostatTemp",
  payload: { new_temp: new_temp },
});
