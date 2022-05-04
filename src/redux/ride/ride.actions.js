import  RideActionTypes  from "./ride.types"

export const setRides = ridesCollections => ({
    type: RideActionTypes.SET_RIDES,
    payload: ridesCollections
})