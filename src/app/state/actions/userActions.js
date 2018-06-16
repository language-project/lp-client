import ActionType from '@constants/ActionType';
import Aktion from '@modules/Aktion';
import Logger from '@modules/Logger';
import LpApis, { URL } from '@apis/LpApis/LpApis';
import { selectAxiosPayload, selectAxiosError } from '@modules/Axios';

export function requestSignInUser({
  email,
  password,
}) {
  return async (dispatch, getState) => {
    return Aktion.of(ActionType.REQUEST_SIGN_IN_USER)
      .dispatcher(dispatch)
      .basePayload(arguments[0])
      .async(LpApis.post({
        data: arguments[0],
        url: URL.SESSION_NEW,
      }))
      .fire();
  //   dispatch({
  //     type: ActionType.REQUEST_SIGN_IN_USER,
  //   });

  //   try {
  //     const result = await MarmoymAPI.signInUser({
  //       email,
  //       password,
  //     });

  //     dispatch({
  //       payload: {
  //         ...selectAxiosPayload(result),
  //       },
  //       type: ActionType.REQUEST_SIGN_IN_USER_SUCCESS,
  //     });

  //     return {
  //       msg: 'success',
  //     };
  //   } catch (err) {
  //     Logger.error(err);
  //     dispatch({
  //       error: selectAxiosError(err),
  //       type: ActionType.REQUEST_SIGN_IN_USER_ERROR,
  //     });
  //   }
  // }
  };
};

export function requestSignUpUser({
  email,
  password,
  username,
}) {
  return async (dispatch, getState) => {
    dispatch({
      type: ActionType.REQUEST_SIGN_UP_USER
    });

    try {
      const result = await MarmoymAPI.signUpUser({
        email, password, username,
      });

      dispatch({
        payload: {
          ...selectAxiosPayload(result),
        },
        type: ActionType.REQUEST_SIGN_UP_USER_SUCCESS,
      });

      return {
        msg: 'success',
      };
    } catch (err) {
      Logger.error(err);
      dispatch({
        error: selectAxiosError(err),
        type: ActionType.REQUEST_SIGN_UP_USER_ERROR,
      });
    }
  }
};
