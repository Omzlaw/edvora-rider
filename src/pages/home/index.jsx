import Box from '@mui/material/Box';
import { useStyles } from './useStyles';
import Header from '../../components/header/header.component';
import RideStatusTabs from '../../components/ride-status-tabs/ride-status-tabs.component';


export default function Home() {
  return (
    <Box>
      <Header />
      <RideStatusTabs />
    </Box>
  )
}