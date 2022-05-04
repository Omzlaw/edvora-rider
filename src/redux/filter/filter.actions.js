import  FilterActionTypes  from "./filter.types"
import {selectAllStates, selectAllCities, filteredCitiesByState} from "./filter.utils";

export const setStates = stateCollection => ({
    type: FilterActionTypes.SET_STATES,
    payload: selectAllStates(stateCollection),
});

export const setCities = cityCollection => ({
    type: FilterActionTypes.SET_CITIES,
    payload: selectAllCities(cityCollection),
});

export const filteredCities = (rides, currentState) => ({
    type: FilterActionTypes.FILTER_CITY_BY_STATE,
    payload: filteredCitiesByState(rides, currentState),
});