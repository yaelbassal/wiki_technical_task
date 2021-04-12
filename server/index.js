const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.post('/submission', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/confirmation.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
