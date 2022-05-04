

import userReducer
from './user/user.reducer';
import rideReducer
from './ride/ride.reducer';
import filterReducer
from './filter/filter.reducer';


const rootReducer = {
    user: userReducer,
    rides: rideReducer,
    filter: filterReducer
};

export default rootReducer;