import
RideActionTypes
from "./ride.types";

const INITIAL_STATE = {
    collection: [],
    filteredCollection: [],
}

const rideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RideActionTypes.SET_RIDES:
            return {
                ...state,
                collection: action.payload,
                filteredCollection: action.payload,
            };
        case RideActionTypes.SET_FILTERED_RIDES:
            return {
                ...state,
                filteredCollection: action.payload
            };

        default:
            return state;
    }
}

export default rideReducer;