const express = require('express');
const router = express.Router();

const conn = require("../bbdd.js");

router.get('/list', (req,res)=>{
    conn.query('SELECT * FROM user', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log("Vaya algo a pasado!");
        }
    })
})

router.get('/list/:id', (req,res)=>{
    const { id } = req.params;
    conn.query('SELECT * FROM user WHERE user_id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log("Vaya algo a pasado!");
        }
    })
})

module.exports = router;
