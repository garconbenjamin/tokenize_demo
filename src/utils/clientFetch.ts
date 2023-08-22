import { HEADERS } from '@/constants';
import store from '@/store';

const clientFetch = async (url: string, options: RequestInit = {}) => {
  const { userAgent, deviceId } = store.getState().config;

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
