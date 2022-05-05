import  FilterActionTypes  from "./filter.types"
import {selectAllStates, selectAllCities, filteredCitiesByState} from "./filter.utils";

export const setStates = rideCollection => ({
    type: FilterActionTypes.SET_STATES,
    payload: selectAllStates(rideCollection),
});

export const setCities = rideCollection => ({
    type: FilterActionTypes.SET_CITIES,
    payload: selectAllCities(rideCollection),
});

export const filteredCities = (rides, currentState) => ({
    type: FilterActionTypes.FILTER_CITY_BY_STATE,
    payload: filteredCitiesByState(rides, currentState),
});