var express = require('express');
var app = express();
var logger = require('./logger-middleware');
var helloBye = require('./hello-bye');
var apiRouter = express.Router();
apiRouter.use(logger);

app.use('/api', apiRouter);
app.use(helloBye);

app.listen('8000', function() {
  console.log('connected on localhost:8000');
});