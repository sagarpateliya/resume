var express = require('express');
var app = express();
var path = require('path');
var router = require('router');

app.get('/data', (req, res)=>{
  res.data(path.join(__dirname, '/data/resume.pdf'));
});

app.listen(8080, function(){
  console.log('server started on 8080');
});

module.exports = router;
