import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { useStyles } from './useStyles';

import HeaderUserDetails from '../header-user-details/headerUserDetails.component';

const Header = () => {
    const user = {
        station_code: 69,
        name: 'John Doe',
        url: 'https://picsum.photos/200'
    };

    return (
        <Box sx={useStyles.root}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item><Typography sx={useStyles.logo}>Edvora</Typography></Grid>
                <Grid item><HeaderUserDetails user={user}  /></Grid>
            </Grid>
        </Box>
    )
}

export default Header;