const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//This is so we can use promises
const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

//created a class so we could use methods inside routes
//use promisify so we could use .then instead of callback functions
class Db {
    readFs() {
        return readAsync('db/db.json', 'utf-8');
    }

    writeFs(note) {
        return writeAsync('db/db.json', JSON.stringify(note));
    }
    readAll() {
        //spreading the array
        return this.readFs().then(notes => [...JSON.parse(notes)])
    }

    newNote(note) {
        //uuid creating a random id
        let newNote = { ...note, id: uuidv4() };
        return this.readAll()
            //pushing to the array using ES6
            .then(notes => [...notes, newNote])
            .then(notes => this.writeFs(notes))
            .then(() => this.readAll());
    }

    deleteNote(id) {
        return this.readAll()
            //selecting everything that does not have that particular id
            .then(notes => notes.filter(note => note.id !== id))
            .then(notes => this.writeFs(notes))
            .then(() => this.readAll());
    }
}
module.exports = new Db();