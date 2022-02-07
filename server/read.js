const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('./data.yml', 'utf8');
    let data = yaml.load(fileContents);

    console.log(data);
} catch (e) {
    console.log(e);
}

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send(data);
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});