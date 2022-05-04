export const selectNearestRides = (rides, userStationCode) => {
    const ridesWithDistance = addDistanceKeyToRides(rides, userStationCode);
    const nearestRides = ridesWithDistance.sort((a, b) => a.distance - b.distance);
    return nearestRides;
}

export const selectUpcomingRides = (rides, userStationCode) => {
    const ridesWithDistance = addDistanceKeyToRides(rides, userStationCode);
    const currentDate = Date.parse(new Date());
    const upcomingRides = ridesWithDistance.filter(ride => Date.parse(ride.id) > currentDate);
    return upcomingRides;
}

export const selectPastRides = (rides, userStationCode) => {
    const ridesWithDistance = addDistanceKeyToRides(rides, userStationCode);
    const currentDate = Date.parse(new Date());
    const pastDates = ridesWithDistance.filter(ride => Date.parse(ride.date) < currentDate);
    return pastDates;
}

const addDistanceKeyToRides = (rides, userStationCode) => {
    const ridesWithDistance = rides.map((ride) => {
        const distanceArray = ride.station_path.map(code => Math.abs(code - userStationCode));
        const distance = Math.min(...distanceArray);
        return {...ride, distance};
    });
    return ridesWithDistance;
};