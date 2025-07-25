const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { user_id, date, exercise_type, duration_min, calories_burned } = req.body;
  const result = await pool.query(
    'INSERT INTO FitnessLogs (user_id, date, exercise_type, duration_min, calories_burned) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [user_id, date, exercise_type, duration_min, calories_burned]
  );
  res.status(201).json(result.rows[0]);
});

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM FitnessLogs');
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM FitnessLogs WHERE log_id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { user_id, date, exercise_type, duration_min, calories_burned } = req.body;
  const result = await pool.query(
    'UPDATE FitnessLogs SET user_id=$1, date=$2, exercise_type=$3, duration_min=$4, calories_burned=$5 WHERE log_id=$6 RETURNING *',
    [user_id, date, exercise_type, duration_min, calories_burned, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM FitnessLogs WHERE log_id = $1', [req.params.id]);
  res.json({ message: 'Log deleted' });
});

module.exports = router;