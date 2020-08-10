const fs = require('fs');
const path = require('path');

module.exports = function (app) {

    fs.readFile('Develop/db/db.json', function (err, data) {
        if (err) throw err;
        let notes = JSON.parse(data);

        app.get('/api/notes', function (req, res) {
            res.json(notes);
        });
    })
    app.post('/api/notes', function (req, res) {
        fs.readFile('db/db.json', (err, data) => {
            if (err) throw err;
            let newNote = req.body;
            notes.push(newNote);
            //updateDb();
        })
        fs.writeFile('db/db.json', JSON.stringify(notes), err => {
            if (err) throw err;
            res.redirect('/notes');
        })
    });

    app.get('/api/notes/:id', function (req, res) {
        res.json(notes[req.params.id]);
        return console.log('Retrieved note: ' + newNote.title);
    });

    app.delete('/api/notes/:id', function (req, res) {
        notes.splice(req.params.id, 1);
        updateDb();
        console.log('Deleted note with id " +req.params.id');
        res.redirect('/notes');
    });

    app.get('/notes', function (req, res) {
        fs.readFile("db/db.json", "utf-8", (err, data) => {
            return err ? console.log(err) : res.json(JSON.parse(data))
        }
            // res.sendFile(path.join(__dirname, '../public/notes.html'));
            // }
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

        function updateDb() {
            fs.writeFile('Develop/db/db.json', JSON.stringify(notes, '\t'), function (err) {
                if (err) throw err;
                return res.redirect('/notes');
                //return true;
            });
        }
    });
}
