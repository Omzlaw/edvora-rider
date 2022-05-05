import { createSelector } from 'reselect';

const selectRides = state => state.rides;

export const selectRideCollection = createSelector(
  [selectRides],
  rides => rides.collection || []
);

export const selectFilteredRideCollection = createSelector(
  [selectRides],
  rides => rides.filteredCollection || []
);