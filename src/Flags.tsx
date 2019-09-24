import { FLAG_ISO_CODE, FLAG_ISO_CODES } from './types';

const LazyFlags = FLAG_ISO_CODES.reduce(
  (prev, code) => ({
    ...prev,
    [code]: import(`./resources/flags/${code}.png`),
  }),
  {}
) as {
  [flag in FLAG_ISO_CODE]: Promise<any>;
};

export default LazyFlags;
