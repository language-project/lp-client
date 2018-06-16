import { createRequestId } from '@modules/Aktion';

const REDUCER = 'networkReducer';

// export function makeSelectNetwork(actionType) {
//   if (actionType === undefined) throw new Error('makeSelectNetwork needs actionType');
//   return (state, props) => state[reducer].network[createRequestId(actionType, props.componentId)];
// };

export function makeSelectNetworkData(actionType) {
  if (actionType === undefined) throw new Error('makeSelectNetworkData needs actionType');
  return (state, props) => {
    const componentId = props.componentId ? props.componentId : props.actionComponentId;
    return state[REDUCER].data[createRequestId(actionType, componentId)];
  }
};
