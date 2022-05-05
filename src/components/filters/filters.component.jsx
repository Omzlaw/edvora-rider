import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Popper from "@mui/material/Popper";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import { useStyles } from "./useStyles";
import Dropdown from "../dropdown/dropdown.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCityCollection, selectStateCollection } from "../../redux/filter/filter.selector";

const Filters = ({states, cities}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "filter-popper" : undefined;

  return (
    <Box sx={useStyles.root}>
      <IconButton onClick={handleClick}>
        <Grid container direction="row">
          <Grid item>
            <FilterListRoundedIcon />
          </Grid>
          <Grid item>
            <Typography sx={{ marginLeft: "10px" }}>Filter</Typography>
          </Grid>
        </Grid>
      </IconButton>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <Box sx={useStyles.filterCard}>
          <Grid container direction="column">
            <Grid item>
              <Typography>Filter</Typography>
              <Divider />
            </Grid>
            <Grid item>
              <Box sx={useStyles.dropdown}>
                <Dropdown name="State" values={states} />
                <Dropdown name="City" values={cities} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Popper>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  states: selectStateCollection,
  cities: selectCityCollection
});

export default connect(mapStateToProps, null)(Filters);
