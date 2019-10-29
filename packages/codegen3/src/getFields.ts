import * as mysql from 'mysql';
import * as util from 'util';
import { Connection } from 'mysql';
import { IField } from 'codegen/IField';
import { GlobalVar } from '@mapbul-pub/common';

let connection: Connection;

export type queryFn = (expression: string) => Promise<any>;

interface IDescribeRowData {
  Default: any;
  Field: string;
  Key: string;
  Null: string;
  Type: string;
}

const traslateField = (field: string) => {
  return field[0].toLowerCase() + field.slice(1);
};

const traslateType = (type: string) => {
  if (type.includes('varchar') || type.includes('text') || type.includes('char')) {
    return 'string';
  } else if (type.includes('int') || type.includes('float') || type.includes('double')) {
    return 'number';
  } else if (type.includes('bit')) {
    return 'boolean';
  } else if (type.includes('data') || type.includes('time')) {
    return 'Date';
  }
  return type;
};

export const initConnection = () => {
  connection = mysql.createConnection(GlobalVar.env.dbConnection);
  const query: queryFn = util.promisify(connection.query).bind(connection);
  return query;
};

export const closeConnection = () => {
  if (connection) {
    connection.destroy();
  }
};

export const getFields = async (query: queryFn, tableName: string) => {
  const result: any[] = await query(`DESCRIBE ${tableName}`);
  return result.map(
    (row: IDescribeRowData, index: number) =>
      ({
        fieldOrigin: row.Field,
        field: traslateField(row.Field),
        type: traslateType(row.Type),
        separator: index !== result.length - 1 ? ',' : '',
      } as IField),
  );
};
