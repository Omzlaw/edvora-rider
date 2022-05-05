import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectFilteredRideCollection,
  selectRideCollection,
} from "../../redux/ride/ride.selector";
import { setFilteredRides } from "../../redux/ride/ride.actions";
import {
  filterRidesByState,
  filterRidesByCity,
} from "../../redux/ride/ride.utils";

import { useStyles } from "./useStyles";
import { setCities } from "../../redux/filter/filter.actions";

const Dropdown = ({
  name,
  values,
  rides,
  filteredRides,
  setFilteredRides,
  setCities,
}) => {
  const [value, setValue] = useState("");
  const selectInput = useRef(null);

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
  };

  const cityChange = (value, stateValue) => {
    const filteredRidesByState = filterRidesByState(rides, stateValue);
    const filteredRidesByCity = filterRidesByCity(filteredRidesByState, value);
    setFilteredRides(filteredRidesByCity);
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
          ref={selectInput}
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
});

const mapDispatchToProps = (dispatch) => ({
  setFilteredRides: (rides) => dispatch(setFilteredRides(rides)),
  setCities: (rides) => dispatch(setCities(rides)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
