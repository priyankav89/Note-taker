//Import dependecies
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

//Initialize our app variable by setting it to the value of express()
const app = express();

const PORT = process.env.PORT || 1111;
// Sets up the Express app to handle data parsing
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes to notesRoutes and htmlRoutes files
require("./routes/notesRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
