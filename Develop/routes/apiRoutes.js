const express = require('express').Router();

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(notes);
    })

    fs.readFile('db/db.json', (err, data) {
        if (err) throw err;

    });
}
