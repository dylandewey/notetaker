const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 7500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});