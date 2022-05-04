import
FilterActionTypes
from "./filter.types";

const INITIAL_STATE = {
    stateCollection: [],
    cityCollection: [],
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
        case FilterActionTypes.FILTER_CITY_BY_STATE:
            return {
                ...state,
                cityCollection: action.payload,
            };

        default:
            return state;
    }
}

export default filterReducer;