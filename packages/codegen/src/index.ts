import appRootPath from 'app-root-path';
import { setEnvVariables } from '@mapbul-pub/common';
const path = `${appRootPath}/.env`;
console.log(path);
setEnvVariables(path);

import { generateControllers } from 'codegen/generateControllers';
// import { sleep } from '@mapbul-pub/common';

export * from './generateControllers';
export * from './routerStorage';

export const test = () => {
  console.log('test 2323-');
};


// generateControllers();

// export const main = async () => {
//   await sleep(1000);
//   console.log('starting2');

//   // test();
//   const t = 79;
//   console.log(t);
//   console.log(t);
// };

// main();
