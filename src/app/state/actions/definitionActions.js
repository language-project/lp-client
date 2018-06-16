import { selectAxiosPayload, selectAxiosError } from '@modules/Axios';
import ActionType from '@constants/ActionType';
import Aktion from '@modules/Aktion';
import Logger from '@modules/Logger';
import LpApis, { URL } from '@apis/LpApis/LpApis';

const logger = new Logger('action');

// export function requestGetDefinitionsById({
//   defId,
// }) {
//   return async (dispatch, getState) => {
//     dispatch({
//       type: ActionType.REQUEST_GET_DEFINITIONS_BY_ID,
//     });

//     try {
//       const result = await MarmoymAPI.getDefinitionsById({
//         defId,
//       });

//       dispatch({
//         payload: {
//           ...selectAxiosPayload(result),
//         },
//         type: ActionType.REQUEST_GET_DEFINITIONS_BY_ID_SUCCESS,
//       });
//     } catch (err) {
//       Logger.error(err);
//       dispatch({
//         error: selectAxiosError(err),
//         type: ActionType.REQUEST_GET_DEFINITIONS_BY_ID_ERROR,
//       });
//     }
//   }
// };

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

    // dispatch({
    //   payload: arguments[0],
    //   type: ActionType.REQUEST_GET_DEFINITIONS,
    // });

    // try {
    //   const result = await MarmoymAPI.getDefinitions({
    //     page,
    //   });

    //   dispatch({
    //     payload: {
    //       componentId,
    //       ...selectAxiosPayload(result),
    //     },
    //     type: ActionType.REQUEST_GET_DEFINITIONS_SUCCESS,
    //   });
    // } catch (err) {
    //   Logger.error(err);
    //   dispatch({
    //     error: selectAxiosError(err),
    //     type: ActionType.REQUEST_GET_DEFINITIONS_ERROR,
    //   });
    // }
  }
};

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