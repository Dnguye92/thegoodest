const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 9000;
const posts = require('./routes/api/posts');
const keepers = require('./routes/api/keepers');
const users = require('./routes/api/users');
require('./db/mongoose');

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use('/api/posts', posts);
app.use('/api/keepers', keepers);
app.use('/api/users', users);

app.listen(port, () => {
  console.log('Server running on port', port);
});