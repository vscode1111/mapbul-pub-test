import appRootPath from 'app-root-path';
import { setEnvVariables } from '../src';

describe('serverConfig', () => {
  describe('root', () => {
    it('setEnvVariables method', () => {
      const path = `${appRootPath}/.env`;
      const serverConfig = setEnvVariables(path);
      expect(serverConfig.isProduction).toBe(true);
      expect(serverConfig.dbConnection.host).toBe('localhost');
      expect(serverConfig.dbConnection.user).toBe('root');
      expect(serverConfig.dbConnection.password).toBe('461301+MY');
      expect(serverConfig.dbConnection.database).toBe('mapbul');
    });
  });
});
