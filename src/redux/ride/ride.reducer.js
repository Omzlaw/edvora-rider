import
RideActionTypes
from "./ride.types";

const INITIAL_STATE = {
    collection: [],
}

const rideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RideActionTypes.SET_RIDES:
            return {
                ...state,
                collection: action.payload,
            };

        default:
            return state;
    }
}

export default rideReducer;