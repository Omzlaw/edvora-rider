import Box from "@mui/material/Box";
import RideDetailCard from "../ride-detail-card/ride-detail-card.component";
import { useStyles } from "./useStyles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRideCollection } from "../../redux/ride/ride.selector";
import { selectPastRides } from "../../redux/ride/ride.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";

const PastRides = ({ rides, currentUser }) => {
  const { station_code } = currentUser;
  const pastRides = selectPastRides(rides, station_code);
  return (
    <Box sx={useStyles.root}>
      {pastRides.length ? (
        pastRides.map((ride, index) => (
          <RideDetailCard key={index} ride={ride} />
        ))
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  rides: selectRideCollection,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(PastRides);
