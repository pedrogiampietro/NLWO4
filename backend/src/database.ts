import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './config';
import path from 'path';

export default async (): Promise<any> => {
  const connection = await createConnection({
    type: 'mysql',
    host: config.typeorm.host,
    port: config.typeorm.port,
    username: config.typeorm.username,
    password: config.typeorm.password,
    database: config.typeorm.database,
  });

  return connection.manager;
};
