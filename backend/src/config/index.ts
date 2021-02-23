import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '/../../.env') });

const config = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',

  typeorm: {
    type: process.env.TYPEORM_TYPE || 'mysql',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
  },
};

export default config;
