export * from './fileUtils';
export * from './processUtils';
export * from './timeUtils';
export * from './serverConfig';
export * from './dbConnection';

export const test = () => {
  console.log('test 12356+');
};

// export namespace TempNamespace {
//   export type queryFn = (expression: string) => Promise<any>;
// }

export interface ITemp {
  temp: string;
}