const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'FitnessAppDB',
  password: '12root',
  port: 5432,
});

module.exports = pool;
