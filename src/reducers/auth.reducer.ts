import { Reducer } from 'redux';
import { ActionLogin, ActionLogout } from '../types/actions.interfaces';

export type AuthState = {
  user?: {
    username: string;
    [key: string]: any;
  };
  token?: string;
};

const INITIAL_STATE: AuthState = {};

export const authReducer: Reducer<AuthState, ActionLogin | ActionLogout> = (
  state = INITIAL_STATE,
  action
) => {
  if (action.type === 'auth/login') {
    state = {
      token: action.token,
      user: action.user
    }
  }
  if (action.type === 'auth/logout') {
    state = {}
  }
  return state;
};
