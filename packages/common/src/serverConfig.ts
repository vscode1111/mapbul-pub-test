export let serverConfig: IServerConfig;

export const setEnvVariables = (path: string): IServerConfig => {
  const result = require('dotenv').config({ path });
  // console.log(result);
  serverConfig = {
    isProduction: process.env.NODE_ENV !== 'development',
    dbConnection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  };
  return serverConfig;
};

export const getServerConfig = (): IServerConfig => serverConfig;

export interface IServerConfig {
  isProduction: boolean;
  dbConnection: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
}
