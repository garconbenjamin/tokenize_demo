import {HEADERS} from '@/constants';
import store from '@/store';

const {userAgent, deviceId} = store.getState().config;

const clientFetch = async (url: string, options: RequestInit = {}) => {
  return fetch(url, {
    headers: {
      ...HEADERS,
      'user-agent': userAgent || '',
      'TOK-DEVICE-ID': deviceId || '',
    },
    ...options,
  });
};
export default clientFetch;
