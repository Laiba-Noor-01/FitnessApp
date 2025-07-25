const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { user_id, calories_goal, water_goal_ml, sleep_goal_hr } = req.body;
  const result = await pool.query(
    'INSERT INTO Goals (user_id, calories_goal, water_goal_ml, sleep_goal_hr) VALUES ($1, $2, $3, $4) RETURNING *',
    [user_id, calories_goal, water_goal_ml, sleep_goal_hr]
  );
  res.status(201).json(result.rows[0]);
});

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM Goals');
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM Goals WHERE goal_id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { user_id, calories_goal, water_goal_ml, sleep_goal_hr } = req.body;
  const result = await pool.query(
    'UPDATE Goals SET user_id=$1, calories_goal=$2, water_goal_ml=$3, sleep_goal_hr=$4 WHERE goal_id=$5 RETURNING *',
    [user_id, calories_goal, water_goal_ml, sleep_goal_hr, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Goals WHERE goal_id = $1', [req.params.id]);
  res.json({ message: 'Goal deleted' });
});

module.exports = router;
