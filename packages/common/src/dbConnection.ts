import * as mysql from 'mysql';
import * as util from 'util';
import { Connection } from 'mysql';
import { GlobalVar } from '.';

export type queryFn = (expression: string) => Promise<any>;

class DbConnection {
  private connectionInt: Connection;
  private queryInt: queryFn;
  constructor() {
    this.connectionInt = mysql.createConnection(GlobalVar.env.dbConnection);
    this.queryInt = util.promisify(this.connectionInt.query).bind(this.connectionInt);
  }

  public get connection(): Connection {
    return this.connectionInt;
  }

  public get query(): queryFn {
    return this.queryInt;
  }
}

// tslint:disable-next-line: max-classes-per-file
export class DbConnectionSingleton {
  private static instance: DbConnection;

  constructor() {
    if (DbConnectionSingleton.instance) {
      DbConnectionSingleton.instance = new DbConnection();
    }
  }

  public getInstance(): DbConnection {
    return DbConnectionSingleton.instance;
  }
}
