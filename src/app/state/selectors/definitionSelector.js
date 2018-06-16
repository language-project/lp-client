import { createSelector } from 'reselect';

import { makeSelectNetworkData } from '@selectors/networkSelector';
import Network from '@constants/Network';

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
