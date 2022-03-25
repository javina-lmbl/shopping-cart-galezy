import { ThunkAction } from 'redux-thunk';
import fakeStoreApi from '../services/fakeStore.api';
import { ActionLogin, ActionLogout } from '../types/actions.interfaces';

export const loginAction = (
  user: {
    username: string;
    [key: string]: any;
  },
  token: string
): ActionLogin => ({
  type: 'auth/login',
  token,
  user,
});

export const logoutAction = (): ActionLogout => ({
  type: 'auth/logout',
});

export const login =
  (
    username: string,
    password: string,
    after: (err?: Error) => void
  ): ThunkAction<any, any, any, ActionLogin> =>
  async (dispatch) => {
    if (username === 'tester' && password === 'test') {
      dispatch(
        loginAction(
          {
            username,
          },
          Date.now().toString(36)
        )
      );
      after();
    } else {
      after(new Error('Unauthorized'));
    }
  };
