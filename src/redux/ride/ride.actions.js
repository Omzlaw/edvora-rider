import  RideActionTypes  from "./ride.types"

export const setRides = ridesCollections => ({
    type: RideActionTypes.SET_RIDES,
    payload: ridesCollections
});

export const setFilteredRides = filteredRidesCollections => ({
    type: RideActionTypes.SET_FILTERED_RIDES,
    payload: filteredRidesCollections
});