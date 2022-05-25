const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', 
  require('./src/routes/projects-route')
);

const _PORT = 8080

app.listen(_PORT, ()=>{
  console.log(`Server running on port ${_PORT}...`);
});