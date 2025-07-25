const express = require ('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { user_id, date, hours_slept } = req.body;
  const result = await pool.query(
    'INSERT INTO SleepLogs (user_id, date, hours_slept) VALUES ($1, $2, $3) RETURNING *',
    [user_id, date, hours_slept]
  );
  res.status(201).json(result.rows[0]);
});

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM SleepLogs');
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM SleepLogs WHERE sleep_id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { user_id, date, hours_slept } = req.body;
  const result = await pool.query(
    'UPDATE SleepLogs SET user_id=$1, date=$2, hours_slept=$3 WHERE sleep_id=$4 RETURNING *',
    [user_id, date, hours_slept, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM SleepLogs WHERE sleep_id = $1', [req.params.id]);
  res.json({ message: 'Sleep log deleted' });
});

module.exports = router;
