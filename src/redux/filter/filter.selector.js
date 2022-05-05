import {
  createSelector
} from 'reselect';

const selectFilter = state => state.filter;

export const selectStateCollection = createSelector(
  [selectFilter],
  filter => filter.stateCollection || []
);

export const selectCityCollection = createSelector(
  [selectFilter],
  filter => filter.cityCollection || []
);

export const selectCurrentState = createSelector(
  [selectFilter],
  filter => filter.selectedState || 'State'
);

export const selectCurrentCity = createSelector(
  [selectFilter],
  filter => filter.selectedCity || 'City'
);