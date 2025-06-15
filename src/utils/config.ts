import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const config = {
  PORT: process.env.PORT || 3000,
  SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000',
  DATA_URL: 'https://eurosportdigital.github.io/eurosport-node-developer-recruitment',
};

export default config;