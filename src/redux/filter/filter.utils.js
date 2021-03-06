import { filterRidesByState } from "../ride/ride.utils";

export const selectAllStates = (rides) => {
    const allStates = rides.reduce((acc, ride) => {
        const {state} = ride;
        if (!acc.includes(state)) {
            acc.push(state);
        }  
         return acc;
    }, []);
    return allStates;
}

export const selectAllCities = (rides) => {
    const allCities = rides.reduce((acc, ride) => {
        const {city} = ride;
        if (!acc.includes(city)) {
            acc.push(city);
        }  
         return acc;
    }, []);
    return allCities;
}

export const filterCitiesByState = (rides, state) => {
    const filteredByStates = filterRidesByState(rides, state);
    const filteredCities = selectAllCities(filteredByStates);
    return filteredCities;
}