import appRootPath from 'app-root-path';
import { setEnvVariables } from '@mapbul-pub/common';
const path = `${appRootPath}/.env`;
console.log(path);
setEnvVariables(path);

export * from './routerStorage';
export * from './generateControllers';

import { sleep } from '@mapbul-pub/common';

export const test = () => {
  console.log('test 1235=++');
};

const main = async () => {
  await sleep(500);
  console.log('test');
};

main();
