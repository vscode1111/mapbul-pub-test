import appRootPath from 'app-root-path';
import { GlobalVar } from '@mapbul-pub/common';
// console.log(appRootPath);
const path = `${appRootPath}/.env`;
console.log(path);
GlobalVar.setup(path);

export * from './routerStorage';
export * from './generateControllers';

export const test = () => {
  console.log('test 12356+');
};

console.log('index from codegen 3.4');
