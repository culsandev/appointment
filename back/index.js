const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const conn = require('./bbdd');

//settings
app.set('port',process.env.PORT || 4000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// set static folder
app.use(express.static(path.join(__dirname,'../front')));

//rutas
app.use(require('./routes/operations'));

// Server start
app.listen(app.get('port'), ()=>{
  console.log('server on port 4000', app.get('port'));
})

