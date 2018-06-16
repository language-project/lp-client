import { createSelector } from 'reselect';

const REDUCER = 'authReducer';

export const makeReselectCredential = () => {
  return createSelector(
    [selectCredential],
    (credential) => {
      return credential;
    },
  );
};

const selectCredential = (state) => {
  return state[REDUCER].credential;
};
