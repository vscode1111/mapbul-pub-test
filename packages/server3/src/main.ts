import * as appRootPath from 'app-root-path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { GlobalVar } from '@mapbul-pub/common';
// import * as variable from '@mapbul-pub/common';
const path = `${appRootPath}/.env`;
// const path = __dirname + '/.env';
console.log(path);
GlobalVar.setup(path);
console.log(GlobalVar.env);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3200;
  await app.listen(port);
  console.log(`Server started at http://localhost:${port}`);
}
bootstrap();
