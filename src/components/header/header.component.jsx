import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { useStyles } from './useStyles';

import HeaderUserDetails from '../header-user-details/header-user-details.component';

const Header = () => {

    return (
        <Box sx={useStyles.root}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item><Typography sx={useStyles.logo}>Edvora</Typography></Grid>
                <Grid item><HeaderUserDetails /></Grid>
            </Grid>
        </Box>
    )
}

export default Header;