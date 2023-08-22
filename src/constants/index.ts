const HEADERS: Record<string, string> = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json;charset=utf-8',
};
const CAPTCHA = {
  captcha: 'yWOEjZMIhY',
  captchaBypass: 'yWOEjZMIhY',
};
const TEST_DATA = {
  email: 'tokenize.test@gmail.com',
  password: 'Test#111',
};

const DOLLAR_SIGN: Record<string, string> = {
  usd: '$',
  btc: '฿',
  eth: 'Ξ',
  sgd: 'S$',
  xsgd: 'S$',
};
export { HEADERS, TEST_DATA, CAPTCHA, DOLLAR_SIGN };
