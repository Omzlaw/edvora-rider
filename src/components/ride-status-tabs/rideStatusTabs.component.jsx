import { React, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useStyles } from "./useStyles";

const RideStatusTabs = () => {
  const tabLabel = ({ text }) => {
    return <span></span>;
  };
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={useStyles.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "#fff",
            color: "#fff",
          },
        }}
        aria-label="ride status tabs"
        sx={useStyles.tabs}
      >
        <Tab value="one" label="Nearest rides" />
        <Tab value="two" label="Upcoming rides" />
        <Tab value="three" label="Past rides" />
      </Tabs>
    </Box>
  );
};

export default RideStatusTabs;
