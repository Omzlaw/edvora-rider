import FilterActionTypes from "./filter.types"
import {
    selectAllStates,
    selectAllCities,
    filteredCitiesByState
} from "./filter.utils";

export const setStates = rideCollection => ({
    type: FilterActionTypes.SET_STATES,
    payload: selectAllStates(rideCollection),
});

export const setCities = rideCollection => ({
    type: FilterActionTypes.SET_CITIES,
    payload: selectAllCities(rideCollection),
});

export const setCurrentState = state => ({
    type: FilterActionTypes.SET_CURRENT_STATE,
    payload: state,
});

export const setCurrentCity = city => ({
    type: FilterActionTypes.SET_CURRENT_CITY,
    payload: city,
});