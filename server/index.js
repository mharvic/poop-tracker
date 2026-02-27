"use strict";
const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

// Sample route for HTTP
app.get('/', (req, res) => {
    res.send('Hello from HTTP!');
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});