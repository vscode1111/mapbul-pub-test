import * as appRootPath from 'app-root-path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import { GlobalVar, test } from '@mapbul-pub/common';
GlobalVar.setup(`${appRootPath}/.env`);
console.log(GlobalVar.env);

async function bootstrap() {
  test();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3200;
  app.setBaseViewsDir(`${appRootPath}/views`);
  app.setViewEngine('hbs');
  await app.listen(port);
  console.log(`Server started at http://localhost:${port}`);
}
bootstrap();
