import appRootPath from 'app-root-path';
import { setEnvVariables } from '@mapbul-pub/common';
const path = `${appRootPath.path}/.env`;
console.log(path);
setEnvVariables(path);

export * from './routerStorage';
export * from './generateControllers';

import { sleep, test as testCom } from '@mapbul-pub/common';

export const test = () => {
  console.log('test 1235=++++');
};

const main = async () => {
  await sleep(500);
  testCom();
  console.log('test');
};

main();
