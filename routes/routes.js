const fs = require('fs');
const path = require('path');
const Db = require('../db/db');

module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        Db.readAll().then(notes => res.json(notes))
            .catch(err => console.log(err));
    });

    app.post('/api/notes', function (req, res) {
        Db.newNote(req.body).then(notes => res.json(notes))
            .catch(err => console.log(err));
    });

    app.delete('/api/notes/:id', function (req, res) {
        Db.deleteNote(req.params.id).then(notes => res.json(notes))
            .catch(err => console.log(err));
    });

    //Tried this code and a new note wouldn't show up on the screen without refreshing
    //it also wouldn't delete from the screen without a refresh
    //     fs.readFile('db/db.json', function (err, data) {
    //         if (err) throw err;
    //         let notes = JSON.parse(data);

    //         app.get('/api/notes', function (req, res) {
    //             res.json(notes);
    //         });

    //         app.post('/api/notes', function (req, res) {
    //             fs.readFile('db/db.json', (err, data) => {
    //                 if (err) throw err;
    //                 let newNote = { ...req.body, id: notes.length + 1 };
    //                 notes.push(newNote);
    //                 updateDb();
    //             })
    //             fs.writeFile('db/db.json', JSON.stringify(notes), err => {
    //                 if (err) throw err;
    //                 res.redirect('/notes');
    //             })
    //         });

    //         app.get('/api/notes/:id', function (req, res) {
    //             res.json(notes[req.params.id]);
    //             return console.log('Retrieved note: ' + newNote.title);
    //         });

    //         app.delete('/api/notes/:id', function (req, res) {
    //             notes = notes.splice(req.params.id, 1);
    //             updateDb();
    //             console.log('Deleted note with id " +req.params.id');
    //             res.redirect('/notes');
    //         });

    //         function updateDb() {
    //             fs.writeFile('db/db.json', JSON.stringify(notes, '\t'), function (err) {
    //                 if (err) throw err;
    //                 //return res.redirect('/notes');
    //                 return notes;
    //             });
    //         }

    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    }
    );

    app.get("/assets/js/index.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
    });

    app.get("/assets/css/styles.css", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    //     })
}

