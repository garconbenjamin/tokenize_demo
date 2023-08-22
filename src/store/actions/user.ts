import store from '@/store';
import { actions } from '@/store/reducers/user';
import type { User } from '@/types/user';

const { dispatch } = store;

function clearUser() {
  return dispatch(actions.clearUser());
}

function setUser(state: Partial<User>) {
  return dispatch(actions.setUser(state));
}

export { clearUser, setUser };
