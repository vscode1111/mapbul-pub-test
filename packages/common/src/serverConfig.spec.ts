import appRootPath from 'app-root-path';
import { setEnvVariables, IServerConfig } from '.';

describe('serverConfig', () => {
  describe('root', () => {
    it('setEnvVariables method', () => {
      const path = `${appRootPath}/.env`;
      const serverConfig = setEnvVariables(path);
      const expected: IServerConfig = {
        isProduction: true,
        dbConnection:
        {
          host: 'localhost',
          user: 'root',
          password: '461301+MY',
          database: 'mapbul',
        }
      };
      expect(serverConfig).toEqual(expected);
    });
  });
});
