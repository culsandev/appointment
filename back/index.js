const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const bbdd = require('./bbdd');


//settings
app.set('port',process.env.PORT || 4000);


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(myConnection(mysql,bbdd,'single'));


// Variables globales
app.use((req,res,next)=>{
  next();
})

//rutas
/*
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('links',require('./routes/links'));
*/

// public
app.use(express.static(path.join(__dirname,'../front')));

// Server start
app.listen(app.get('port'), ()=>{
  console.log('server on port 4000', app.get('port'));
})

