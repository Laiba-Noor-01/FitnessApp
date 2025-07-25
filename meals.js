const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { user_id, date, meal_type, food_items, calories } = req.body;
  const result = await pool.query(
    'INSERT INTO Meals (user_id, date, meal_type, food_items, calories) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [user_id, date, meal_type, food_items, calories]
  );
  res.status(201).json(result.rows[0]);
});

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM Meals');
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM Meals WHERE meal_id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { user_id, date, meal_type, food_items, calories } = req.body;
  const result = await pool.query(
    'UPDATE Meals SET user_id=$1, date=$2, meal_type=$3, food_items=$4, calories=$5 WHERE meal_id=$6 RETURNING *',
    [user_id, date, meal_type, food_items, calories, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Meals WHERE meal_id = $1', [req.params.id]);
  res.json({ message: 'Meal deleted' });
});

module.exports = router;