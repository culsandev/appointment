const express = require('express');
const morgan = require('morgan');
const app = express();
const bbdd = require('./bbdd.js');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static())

app.get('/',(req,res)=>{
  res.send("Eyy");
});

// Server start
app.listen(3000, ()=>{
  console.log('server on port 3000')
})

