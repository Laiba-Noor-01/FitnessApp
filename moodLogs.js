const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { user_id, date, mood_rating } = req.body;
  const result = await pool.query(
    'INSERT INTO MoodLogs (user_id, date, mood_rating) VALUES ($1, $2, $3) RETURNING *',
    [user_id, date, mood_rating]
  );
  res.status(201).json(result.rows[0]);
});

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM MoodLogs');
  res.json(result.rows);
});

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM MoodLogs WHERE mood_id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

router.put('/:id', async (req, res) => {
  const { user_id, date, mood_rating } = req.body;
  const result = await pool.query(
    'UPDATE MoodLogs SET user_id=$1, date=$2, mood_rating=$3 WHERE mood_id=$4 RETURNING *',
    [user_id, date, mood_rating, req.params.id]
  );
  res.json(result.rows[0]);
});

router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM MoodLogs WHERE mood_id = $1', [req.params.id]);
  res.json({ message: 'Mood log deleted' });
});

module.exports = router;

