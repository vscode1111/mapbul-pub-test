import { generateControllers } from 'codegen/generateControllers';
import { sleep } from "@mapbul-pub/common"

export * from './generateControllers';
export * from './routerStorage';

generateControllers();

// export const main = async () => {
//   await sleep(1000);
//   console.log('starting2');

//   // test();
//   const t = 79;
//   console.log(t);
//   console.log(t);
// };

// main();
