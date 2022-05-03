import { React, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useStyles } from "./useStyles";
import NearestRides from "../nearest-rides/nearest-rides.component";
import UpcomingRides from "../upcoming-rides/upcoming-rides.component";
import PastRides from "../past-rides/past-rides.component";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const RideStatusTabs = () => {
  const [value, setValue] = useState(0);

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
        <Tab {...a11yProps(0)} label="Nearest rides" />
        <Tab {...a11yProps(1)} label="Upcoming rides" />
        <Tab {...a11yProps(2)} label="Past rides" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <NearestRides />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UpcomingRides />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PastRides />
      </TabPanel>
    </Box>
  );
};

export default RideStatusTabs;
