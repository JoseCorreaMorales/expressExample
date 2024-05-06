//require('dotenv').config();

import dotenv from 'dotenv';

dotenv.config();

export const Config = {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
};


