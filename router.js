const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Travis');
});
router.get('/:id', (req, res) => {
  res.status(200).send('Detail');
});
