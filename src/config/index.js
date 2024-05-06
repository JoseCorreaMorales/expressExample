//require('dotenv').config();

import dotenv from 'dotenv';

dotenv.config();

export const Config = {
  host: process.env.HOST,
  user: process.env.SQL_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
  secretKey: process.env.SECRET_KEY
};


