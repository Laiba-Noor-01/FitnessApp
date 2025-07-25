const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { user_id, date, amount_ml } = req.body;
  const result = await pool.query(
    'INSERT INTO WaterIntake (user_id, date, amount_ml) VALUES ($1, $2, $3) RETURNING *',
    [user_id, date, amount_ml]
  );
  res.status(201).json(result.rows[0]);
});

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM WaterIntake');
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM WaterIntake WHERE water_id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { user_id, date, amount_ml } = req.body;
  const result = await pool.query(
    'UPDATE WaterIntake SET user_id=$1, date=$2, amount_ml=$3 WHERE water_id=$4 RETURNING *',
    [user_id, date, amount_ml, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM WaterIntake WHERE water_id = $1', [req.params.id]);
  res.json({ message: 'Water intake log deleted' });
});

module.exports = router;
