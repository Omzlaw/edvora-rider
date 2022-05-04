import Box from '@mui/material/Box';
import Header from '../../components/header/header.component';
import RideStatusTabs from '../../components/ride-status-tabs/ride-status-tabs.component';

import { setCurrentUser } from '../../redux/user/user.actions';
import { setRides } from '../../redux/ride/ride.actions';
import { connect } from 'react-redux';


const Home = ({user, rides, setCurrentUser, setRides}) => {
  setCurrentUser(user);
  setRides(rides);
  return (
    <Box>
      <Header />
      <RideStatusTabs />
    </Box>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setRides: rides => dispatch(setRides(rides)),
});

export default connect(null, mapDispatchToProps)(Home);

export async function getServerSideProps (context) {
  
  const resUser = await fetch(`https://assessment.api.vweb.app/user`);
  const user = await resUser.json();

  const resRides = await fetch(`https://assessment.api.vweb.app/rides`);
  const rides = await resRides.json();

  if (!user) {
    return {
      notFound: true,
    }
  }

  if (!rides) {
    return {
      notFound: true,
    }
  }

  return {
    props: { user, rides },
  }

}
