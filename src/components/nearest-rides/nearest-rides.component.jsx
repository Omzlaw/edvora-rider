import Box from "@mui/material/Box";
import RideDetailCard from "../ride-detail-card/ride-detail-card.component";
import { useStyles } from "./useStyles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRideCollection } from "../../redux/ride/ride.selector";
import { selectNearestRides } from "../../redux/ride/ride.utils";
import { selectCurrentUser } from "../../redux/user/user.selector";

const NearestRides = ({ rides, currentUser }) => {
  const { station_code } = currentUser;
  const nearestRides = selectNearestRides(rides, station_code);

  return (
    <Box sx={useStyles.root}>
      {nearestRides.length ? (
        nearestRides.map((ride, index) => (
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

export default connect(mapStateToProps, null)(NearestRides);
