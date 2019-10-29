import * as appRootPath from 'app-root-path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// import { AppModule } from './app.module-old';
import { AppModule } from './app.module';

import { GlobalVar } from '@mapbul-pub/common';
// import * as variable from '@mapbul-pub/common';
const path = `${appRootPath}/.env`;
// const path = __dirname + '/.env';
console.log(path);
GlobalVar.setup(path);
console.log(GlobalVar.env);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3200;
  // const viewPath = join(__dirname, 'views');
  const viewPath = join(appRootPath.path, 'views');
  console.log(viewPath);
  app.setBaseViewsDir(viewPath);
  app.setViewEngine('hbs');
  await app.listen(port);
  console.log(`Server started at http://localhost:${port}`);
}
bootstrap();
