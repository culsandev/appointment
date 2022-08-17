const express = require('express');
const {Router} = require('express');
const router = express.Router();

//Lista de usuarios
const users = (req, res, conn) => {
    const sql = "SELECT * from usuario";
    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json(result);
    });
}
exports.users = users


