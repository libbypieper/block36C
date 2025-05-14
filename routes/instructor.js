const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/instructor', async (req, res) => {
    const result = await db.query('SELECT * FROM student');
    res.json(result.rows);
})

router.post('/instructor', async (req, res) => {
    const { username, password } = req.body;
    const result = await db.query('INSERT INTO instructor (username, password) VALUES ($1, $2) RETURNING *', [username, password]);
    res.json(result.rows[0]);
})

module.exports = router;