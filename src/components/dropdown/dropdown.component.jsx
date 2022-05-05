import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectRideCollection,
} from "../../redux/ride/ride.selector";
import { setFilteredRides } from "../../redux/ride/ride.actions";
import {
  filterRidesByState,
  filterRidesByCity,
} from "../../redux/ride/ride.utils";

import { useStyles } from "./useStyles";
import {
  setCities,
  setCurrentCity,
  setCurrentState,
} from "../../redux/filter/filter.actions";
import { selectCurrentState } from "../../redux/filter/filter.selector";

const Dropdown = ({
  name,
  values,
  rides,
  setFilteredRides,
  setCities,
  setCurrentCity,
  setCurrentState,
  selectedState
}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue(value);
    switch (name) {
      case "State":
        stateChange(value);
        break;
      case "City":
        cityChange(value);
        break;
    }
  };

  const stateChange = (value) => {
    const filteredRidesByState = filterRidesByState(rides, value);
    setFilteredRides(filteredRidesByState);
    setCities(filteredRidesByState);
    setCurrentState(value);
  };

  const cityChange = (value) => {
    const filteredRidesByState = filterRidesByState(rides, selectedState);
    const filteredRidesByCity = filterRidesByCity(filteredRidesByState, value);
    setFilteredRides(filteredRidesByCity);
    setCurrentCity(value);
  };

  return (
    <Box sx={useStyles.root}>
      <FormControl fullWidth>
        <InputLabel id="filter-select-label">{name}</InputLabel>
        <Select
          labelId="filter-select-label"
          id="filter-select"
          value={value}
          label={name}
          name={name}
          onChange={handleChange}
        >
          <MenuItem value={name}>{name}</MenuItem>
          {values.map((val, index) => (
            <MenuItem key={index} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  rides: selectRideCollection,
  selectedState: selectCurrentState,
});

const mapDispatchToProps = (dispatch) => ({
  setFilteredRides: (rides) => dispatch(setFilteredRides(rides)),
  setCities: (rides) => dispatch(setCities(rides)),
  setCurrentCity: (city) => dispatch(setCurrentCity(city)),
  setCurrentState: (state) => dispatch(setCurrentState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
