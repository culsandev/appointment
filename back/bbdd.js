const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    database: "agenda",
    user: "root",
    password: "",
    port:"3306",
  });
  
  //connect
conn.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Mysql is connected!");
});

module.exports = conn;


