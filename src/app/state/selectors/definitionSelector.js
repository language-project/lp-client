import { createSelector } from 'reselect';

import { makeSelectNetworkData } from '@selectors/networkSelector';
import Network from '@constants/Network';

export const makeReselectComments = ({
  actionType,
  defaultValue = {},
}) => {
  return createSelector(
    [makeSelectNetworkData(actionType)],
    (networkData) => {
      return networkData ? networkData : defaultValue;
    },
  );
};

export const makeReselectDefinition = ({
  actionType,
  defaultValue = {},
}) => {
  return createSelector(
    [makeSelectNetworkData(actionType)],
    (networkData) => {
      return networkData ? networkData : defaultValue;
    },
  );
};

export const makeReselectDefinitionList = ({
  actionType,
  defaultValue = {},
}) => {
  return createSelector(
    [makeSelectNetworkData(actionType)],
    (networkData) => {
      return networkData ? networkData : defaultValue;
    },
  );
};
