import
FilterActionTypes
from "./filter.types";

const INITIAL_STATE = {
    stateCollection: [],
    cityCollection: [],
    selectedState: "State",
    selectedCity: "City",
}

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FilterActionTypes.SET_STATES:
            return {
                ...state,
                stateCollection: action.payload,
            };
        case FilterActionTypes.SET_CITIES:
            return {
                ...state,
                cityCollection: action.payload,
            };
        case FilterActionTypes.SET_CURRENT_STATE:
            return {
                ...state,
                selectedState: action.payload,
            };
        case FilterActionTypes.SET_CURRENT_CITY:
            return {
                ...state,
                selectedCity: action.payload,
            };

        default:
            return state;
    }
}

export default filterReducer;