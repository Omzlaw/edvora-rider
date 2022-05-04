import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useStyles } from "./useStyles";
import Image from "next/image";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selector";

const HeaderUserDetails = ({ currentUser }) => {
  const { name, url } = currentUser;
  return (
    <Box>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Typography sx={useStyles.username}>{name}</Typography>
        </Grid>
        <Grid item>
          <Box sx={useStyles.avatar}>
            <Image src={url} alt="User image" width={44} height={44} style={useStyles.avatar} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  null
)(HeaderUserDetails);

