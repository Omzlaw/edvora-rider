import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useStyles } from "./useStyles";

const Dropdown = ({ name, values }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
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
          onChange={handleChange}
        >
          {values.map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;