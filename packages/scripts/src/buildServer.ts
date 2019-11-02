import appRootPath from 'app-root-path';
import { runSync, copyFileSync, removeDirSync, removeFileSync } from '@mapbul-pub/common';

export const buildServer = () => {
  console.log('Build was started');
  const srcDir = `${appRootPath.path}/src`;
  const distDir = `${appRootPath.path}/dist`;
  console.log('Dist folder is removing...');
  try {
    removeDirSync(`${distDir}`);
  } catch (e) {
    console.log(e);
  }
  console.log('Files are copying...');
  copyFileSync(`${srcDir}/.env`, `${distDir}/.env`);
  copyFileSync(`${srcDir}/views/api.hbs`, `${distDir}/views/api.hbs`);
  copyFileSync(`${srcDir}/api.txt`, `${distDir}/api.txt`);
  console.log('Compiling...');
  const output = runSync(`npm run prebuild`);
  console.log(output);
  console.log('Cleaning...');
  removeFileSync(`${distDir}/tsconfig.server-build.tsbuildinfo`);
};

buildServer();
