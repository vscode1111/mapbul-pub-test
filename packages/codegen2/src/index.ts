export * from './routerStorage';

import { sleep } from '@mapbul-pub/common';

export const test = () => {
  console.log('test 1235=+++');
};

const main = async () => {
  await sleep(500);
  console.log('test');
};

main();
