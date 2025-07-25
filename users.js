const express = require('express');
const router = express.Router();
const pool = require('../db'); // adjust path if needed

// CREATE user
router.post('/', async (req, res) => {
  const { name, email, password_hash, age, gender, height_cm, weight_kg, role } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Users (name, email, password_hash, age, gender, height_cm, weight_kg, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [name, email, password_hash, age, gender, height_cm, weight_kg, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all users
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM Users');
  res.json(result.rows);
});

// READ a user by ID
router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM Users WHERE user_id = $1', [req.params.id]);
  res.json(result.rows[0]);
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  const { name, email, password_hash, age, gender, height_cm, weight_kg, role } = req.body;
  const result = await pool.query(
    'UPDATE Users SET name=$1, email=$2, password_hash=$3, age=$4, gender=$5, height_cm=$6, weight_kg=$7, role=$8 WHERE user_id=$9 RETURNING *',
    [name, email, password_hash, age, gender, height_cm, weight_kg, role, req.params.id]
  );
  res.json(result.rows[0]);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM Users WHERE user_id = $1', [req.params.id]);
  res.json({ message: 'User deleted' });
});

module.exports = router;
