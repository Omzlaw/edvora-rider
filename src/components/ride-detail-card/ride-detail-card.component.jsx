import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Image from "next/image";

import { useStyles } from "./useStyles";

const RideDetailCard = ({ ride }) => {
  const {
    id,
    origin_station_code,
    station_path,
    destination_station_code,
    date,
    map_url,
    state,
    city,
    distance,
  } = ride;
  return (
    <Box sx={useStyles.root}>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Box sx={useStyles.mapBox}>
                <Image
                  src={map_url}
                  alt="ride map"
                  width={296}
                  height={148}
                  style={useStyles.map}
                />
              </Box>
            </Grid>
            <Grid item>
              <Grid container>
                <Box sx={useStyles.details}>
                  <Grid item>Ride Id: {id}</Grid>
                  <Grid item>Origin Station: {origin_station_code}</Grid>
                  <Grid item>Station path: {"[" + station_path.toString() + "]"}</Grid>
                  <Grid item>Date: {date}</Grid>
                  <Grid item>Distance: {distance}</Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Box sx={useStyles.city}>{city}</Box>
            </Grid>
            <Grid item>
              <Box sx={useStyles.state}>{state}</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RideDetailCard;
