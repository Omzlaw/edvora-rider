import { React, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useStyles } from "./useStyles";
import NearestRides from "../nearest-rides/nearest-rides.component";
import UpcomingRides from "../upcoming-rides/upcoming-rides.component";
import PastRides from "../past-rides/past-rides.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRideCollection } from "../../redux/ride/ride.selector";
import { selectPastRides } from "../../redux/ride/ride.utils";
import { selectUpcomingRides } from "../../redux/ride/ride.utils";
import { selectNearestRides } from "../../redux/ride/ride.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";

import Filters from '../../components/filters/filters.component';

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

const RideStatusTabs = ({rides, currentUser}) => {
  const pastRidesCount = selectPastRides(rides, currentUser.station_code).length;
  const upcomingRidesCount = selectUpcomingRides(rides, currentUser.station_code).length;
  const nearestRidesCount = selectNearestRides(rides, currentUser.station_code).length;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={useStyles.root}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              scrollButtons="auto"
              variant="scrollable"
              TabIndicatorProps={{
                sx: {
                  backgroundColor: "#fff",
                  color: "#fff",
                },
              }}
              aria-label="ride status tabs"
              sx={useStyles.tabs}
            >
              <Tab {...a11yProps(0)} label={'Nearest rides (' + nearestRidesCount + ')'} />
              <Tab {...a11yProps(1)} label={'Upcoming rides (' + upcomingRidesCount + ')'} />
              <Tab {...a11yProps(2)} label={'Past rides (' + pastRidesCount + ')'} />
            </Tabs>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={useStyles.filter}>
            <Filters />
          </Box>
        </Grid>
      </Grid>
      <Box sx={useStyles.tabPanel}>
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
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  rides: selectRideCollection,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(RideStatusTabs);

