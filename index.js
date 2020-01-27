const express = require('express');
const app = express();

app.route('/api/v1', require('./router.js'));

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;
