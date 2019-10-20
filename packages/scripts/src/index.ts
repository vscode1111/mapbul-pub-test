// export * from './buildServer'
// export * from './deployServer'
import { test, sleep } from '@mapbul-pub/common';
// import { func } from './func';
import { func } from 'scripts/func';

// import { test } from 'common'
// import { test } from '../../common'
// import { test } from '../../common/src'

export const main = async () => {
  await sleep(500);
  console.log('starting3');

  test();
  func();
  const t = 80;
  console.log(t);
  console.log(t);
};

// require('make-runnable')
main();
// test()
