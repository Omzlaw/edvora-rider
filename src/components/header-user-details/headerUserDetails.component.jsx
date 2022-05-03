import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useStyles } from "./useStyles";
import Image from "next/image";

const HeaderUserDetails = ({ user }) => {
  const { name, url } = user;
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

export default HeaderUserDetails;
