var express = require('express');

var app = express();

app.use(require('./server/controllers/static'));

var port = process.env.PORT || 3301;
app.listen(port, function() {
  console.log('listen to ===> http://localhost:' + port);
});