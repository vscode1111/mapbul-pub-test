// export * from './buildServer'
// export * from './deployServer'
import { test } from '@mapbul-pub/common';

// import { test } from 'common'
// import { test } from '../../common'
// import { test } from '../../common/src'

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const main = async () => {
  await sleep(500);
  console.log('starting');

  test();
  const t = 78;
  console.log(t);
  console.log(t);
};

// require('make-runnable')
main();
// test()
