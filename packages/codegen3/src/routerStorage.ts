import * as path from 'path';
import appRootPath from 'app-root-path';
import { removeFileSync, readFileSync, appendFileSync } from '@mapbul-pub/common';

// const apiPath = `${appRootPath.path}/src/server/api.txt`;
const apiPath = path.join(appRootPath.path, '..', 'server/api.txt');
console.log(apiPath);

export const deleteRouterSync = () => {
  removeFileSync(apiPath);
};

export const readRouterSync = () => {
  return readFileSync(apiPath);
};

export const appendRouterSync = (data: string) => {
  appendFileSync(apiPath, `${data} \n`);
};
