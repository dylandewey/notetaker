const express = require('express').Router();

module.exports = function (app) {

    fs.readFile('db/db.json', function (err, data) {
        if (err) throw err;
        let notes = JSON.parse(data);

        app.get('/api/notes', function (req, res) {
            res.json(notes);
        });

        app.post('/api/notes', function (req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log('Added new note: "+newNote.title');
        });

        app.get('/api/notes/:id', function (req, res) {
            notes.splice(req.params.id, 1);
            updateDb();
            console.log('Deleted note with id " +req.params.id');
        });


    });
}
