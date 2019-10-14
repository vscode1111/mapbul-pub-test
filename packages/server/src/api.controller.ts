import { Controller, Get, Render } from '@nestjs/common';
import { readRouterSync, test } from '@mapbul-pub/codegen';

@Controller('api')
export class ApiController {
  @Get()
  @Render('api')
  root() {
    test();
    const apiText = readRouterSync();
    const apiInits = apiText.split(/\r?\n/);
    const apis = [];
    apiInits.forEach(item => {
      if (item !== '') {
        apis.push(`/${item.trim()}`);
      }
    });
    return { message: 'Hello, API!', apis };
  }
}
