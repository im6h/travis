const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Travis');
});
app.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;
