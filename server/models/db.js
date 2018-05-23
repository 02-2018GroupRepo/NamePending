const { Pool, Client } = require('pg');
const config = require('./config/config');

const pool = new Pool({
    user: `${config.username}`,
    database: `${config.database}`,
    password: `${config.password}`,
  });

  module.exports = pool;
