// Import express and dependecies
const express = require('express');
const fs = require('fs');
const path = require('path');

// Routes to get notes.html and index.html
module.exports = function (app) {
    app.get('/notes', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    );
    app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/index.html'))
    );
}