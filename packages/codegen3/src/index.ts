import appRootPath from 'app-root-path';
import { setEnvVariables } from '@mapbul-pub/common';
// console.log(appRootPath);
const path = `${appRootPath}/.env`;
console.log(path);
setEnvVariables(path);

export * from './routerStorage';
export * from './generateControllers';

export const test = () => {
  console.log('test 12356+');
};

console.log('index from codegen 3.4');
