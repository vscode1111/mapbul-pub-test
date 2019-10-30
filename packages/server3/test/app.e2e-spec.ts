import * as request from 'supertest';
import * as appRootPath from 'app-root-path';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { GlobalVar } from '@mapbul-pub/common';

describe('AppController (e2e)', () => {
  let app;

  beforeAll(async () => {
    GlobalVar.setup(`${appRootPath}/.env`);
    console.log(GlobalVar.env);
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setBaseViewsDir(`${appRootPath}/views`);
    app.setViewEngine('hbs');
    await app.init();
  });

  const check = (url: string) => {
    return request(app.getHttpServer())
      .get(url)
      .expect(200);
  };

  // it('/ (GET)', () => {
  //   return check('/').expect('Hello World!');
  // });

  it('/api/articles (GET)', async () => {
    await check('/api/articles');
    // const response = await check('/api');
    // console.log(response);
    // return check('/api/articles');
  });
});
