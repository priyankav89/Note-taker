// Import dependencies
const fs = require("fs");
const uuid = require('uuidv4');
const path = require('path');

module.exports = function (app) {

    // API GET Request
    app.get("/api/notes", (req, res) => {
        
        console.log("\n\nExecuting GET notes request");

        // Read 'db.json' file 
        let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"));
        console.log("\nGET request - Returning notes data: " + JSON.stringify(data));
        res.json(data);
    });


    // API POST Request
    app.post("/api/notes", (req, res) => {

      
        const newNote = req.body;
        
        console.log("\n\nPOST request for the new note " + JSON.stringify(newNote));
        newNote.id = uuid.uuid();

        // Read data from 'db.json' file
        let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"));
        data.push(newNote);

        // write notes to db.json file 
        fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
        console.log("\nSuccess!!Added new note to 'db.json' file!");
        res.json(data);
    });
  
   //  DELETE request
   app.delete("/api/notes/:id", (req,res) => {
    let noteId= req.params.id.toString();
    // Read data from 'db.json' file
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"));

    // filter data to get notes except the one to delete
    const newData = data.filter( note => note.id.toString() !== noteId );

    // Write new data to 'db.json' file
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(newData));
    
    console.log(`\n NOTE DELETED `);
    res.json(newData);
});
};