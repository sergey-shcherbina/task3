const express = require('express')
const cors = require('cors');
require('./config/db');

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
routes(app);

app.use('/', express.static('./client/build'));
// app.use()

const port = 3050;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
});

exports.app = app;