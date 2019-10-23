
// import { test } from '@mapbul-pub/codegen2';
import appRootPath from 'app-root-path';
import { test } from '@mapbul-pub/codegen3';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'server/app.module';
// import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { setEnvVariables, serverConfig, getServerConfig } from '@mapbul-pub/common';
const path = `${appRootPath}/.env`;
// const path = __dirname + '/.env';
console.log(path);
setEnvVariables(__dirname + '/.env');
console.log(serverConfig, getServerConfig());

export const main = async () => {
  // await sleep(500);
  console.log('starting2');

  test();
  const t = 8012;
  console.log(t);
  console.log(t);
};

main();

declare const module: any;

async function bootstrap() {
  // test();
  // codegenTest();
  const port = process.env.PORT || 3200;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('hbs');

  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log(`Server started at http://localhost:${port}`);
}
bootstrap();
