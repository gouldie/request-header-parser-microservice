var express = require('express');
var app = express();

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
  var ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'].split(",")[0] : "Unknown"
  var language = req.headers["accept-language"] ? req.headers["accept-language"].split(",")[0] : "Unknown"
  var software = req.headers['user-agent']
  
  var info = {
    ip,
    language,
    software
  }
  
  res.send(info)
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
