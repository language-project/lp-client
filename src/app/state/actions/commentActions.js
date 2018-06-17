import { selectAxiosPayload, selectAxiosError } from '@modules/Axios';
import ActionType from '@constants/ActionType';
import Aktion from '@modules/Aktion';
import Logger from '@modules/Logger';
import LpApis, { URL } from '@apis/LpApis/LpApis';

const logger = new Logger('action');

export function requestGetComments({
  componentId,
  targetType,
  targetId,
}) {
  return async (dispatch, getState) => {
    return Aktion.of(ActionType.REQUEST_GET_COMMENTS)
      .dispatcher(dispatch)
      .basePayload(arguments[0])
      .async(LpApis.post({
        data: arguments[0],
        url: URL.COMMENTS,
      }))
      .fire();

    // dispatch({
    //   type: ActionType.REQUEST_GET_COMMENTS,
    // });

    // try {
    //   const result = await MarmoymAPI.getComments({
    //     defId,
    //   });

    //   dispatch({
    //     payload: {
    //       ...selectAxiosPayload(result),
    //     },
    //     type: ActionType.REQUEST_GET_COMMENTS_SUCCESS,
    //   });
    // } catch (err) {
    //   Logger.error(err);
    //   dispatch({
    //     error: selectAxiosError(err),
    //     type: ActionType.REQUEST_GET_COMMENTS_ERROR,
    //   });
    // }
  }
};


export function requestNewComment({
  componentId,
  content,
  targetId,
  targetType,
  userId,
}) {
  const data = {
    comment: {
      content: content,
      targetId: targetId,
      targetType: targetType,
      userId: userId,
    },
    componentId,
  }
  return async (dispatch, getState) => {
    return Aktion.of(ActionType.REQUEST_ADD_COMMENTS)
    .dispatcher(dispatch)
    .basePayload(data)
    .async(LpApis.post({
      data: data,
      url: URL.NEWCOMMENT,
    }))
    .fire();
  }
}