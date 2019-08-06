const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
