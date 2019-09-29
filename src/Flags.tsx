import crypto from 'crypto';
import { FLAG_ISO_CODE } from './types';
import { FLAG_ISO_CODES_ALL } from './utils';

const getHash = (code: FLAG_ISO_CODE) =>
  crypto
    .createHash('sha256')
    .update(`${code}.svg`)
    .digest('hex');

const LazyFlags = FLAG_ISO_CODES_ALL.reduce(
  (prev, code) => ({
    ...prev,
    [code]: `${process.env.PUBLIC_URL}/flags/${getHash(code)}.svg`,
  }),
  {},
) as {
  [flag in FLAG_ISO_CODE]: string;
};

export default LazyFlags;
