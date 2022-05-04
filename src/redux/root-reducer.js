

import userReducer
from './user/user.reducer';
import rideReducer
from './ride/ride.reducer';


const rootReducer = {
    user: userReducer,
    rides: rideReducer,
};

export default rootReducer;