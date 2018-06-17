import ActionType from '@constants/ActionType';
import Aktion from '@modules/Aktion';
import LpApis, { URL } from '@apis/LpApis/LpApis';

export function requestGetDefinitions({
  componentId,
  page,
}) {
  return async (dispatch, getState) => {
    return Aktion.of(ActionType.REQUEST_GET_DEFINITIONS)
      .dispatcher(dispatch)
      .basePayload(arguments[0])
      .async(LpApis.post({
        data: arguments[0],
        url: URL.DEFINITIONS,
      }))
      .fire();
  };
};

export function requestDefine({
  form,
}) {
  return async (dispatch, getState) => {
    const data = {
      definitions: [
        {
          label: form.definition,
          poss: [
            {
              id: 1,
            },
          ],
          term: {
            label: form.term,
          },
          usages: [
            {
              label: form.usage,
            },
          ],
        },
      ],
    };

    return Aktion.of(ActionType.REQUEST_DEFINE)
      .dispatcher(dispatch)
      .basePayload(arguments[0])
      .async(LpApis.post({
        data,
        url: [URL.DEFINITION_NEW],
      }))
      .fire();
  };
};

export function requestGetDefinitionsById({
  componentId,
  defId,
}) {
  return async (dispatch, getState) => {
    return Aktion.of(ActionType.REQUEST_GET_DEFINITIONS_BY_ID)
      .dispatcher(dispatch)
      .basePayload(arguments[0])
      .async(LpApis.post({
        data: arguments[0],
        param: {
          defId,
        },
        url: URL.DEFINITIONS_BY_ID,
      }))
      .fire();
  }
}

export function requestDownVoteDefinition({
  componentId,
  targetId,
  targetType,
  userId,
}) {
  return async (dispatch, getsState) => {
    return Aktion.of(ActionType.REQUEST_DOWNVOTE_DEFINITIONS)
      .dispatcher(dispatch)
      .basePayload(arguments[0])
      .async(LpApis.post({
        data: arguments[0],
        url: URL.DOWNVOTE_DEFINITIONS,
      }))
      .fire();
  }
}

export function requestUpVoteDefinition({
  componentId,
  targetId,
  targetType,
  userId,
}) {
  return async (dispatch, getsState) => {
    return Aktion.of(ActionType.REQUEST_UPVOTE_DEFINITIONS)
      .dispatcher(dispatch)
      .basePayload(arguments[0])
      .async(LpApis.post({
        data: arguments[0],
        url: URL.UPVOTE_DEFINITIONS,
      }))
      .fire();
  }
}

// export const search = (searchParam) => {
//   return (dispatch, getState) => {
//     dispatch({
//       type:ActionType.SEARCH,
//     });

//     return MarmoymApis.search(searchParam.query)
//       .then((res) => {
//         dispatch({
//           type: ActionType.GET_DEFINITION_IDS_SUCCESS({
//             defIds: res.defIds
//           })
//         })
//         // todo : dispatch next action
//       })
//       .catch((res) => {
//         // todo
//       })
//   }
// };