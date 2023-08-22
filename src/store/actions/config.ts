import store from '@/store';
import type { Config } from '@/store/reducers/config';
import { actions } from '@/store/reducers/config';

const { dispatch } = store;

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

export { clearConfig, setConfig };
