import { createSelector } from 'reselect';

const selectFilter = state => state.filter;

export const selectStateCollection = createSelector(
  [selectFilter],
  filter => filter.stateCollection || []
);

export const selectCityCollection = createSelector(
    [selectFilter],
    filter => filter.cityCollection || []
  );