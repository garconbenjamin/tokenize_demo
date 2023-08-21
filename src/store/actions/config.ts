import type {Config} from '@/store/reducers/config';
import {actions} from '@/store/reducers/config';
import store from '@/store';

const {dispatch} = store;

function clearConfig() {
  return dispatch(actions.clearConfig());
}

function setConfig(state: Partial<Config>) {
  return dispatch(
    actions.setConfig({
      ...state,
    }),
  );
}

export {clearConfig, setConfig};
