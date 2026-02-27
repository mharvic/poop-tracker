// "use strict";
// const path = require("path");
// const express = require("express");
// const PORT = process.env.PORT || 5050;
// const app = express();

// const distPath = path.join(__dirname, "..", "client", "dist");

// app.use(express.static(distPath));

// app.use(express.json());

// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from the server!", timestamp: new Date().toISOString() });
// });


// app.get("/*splat", (req, res) => {
//   res.sendFile(path.join(distPath, "index.html"));
// });

// // Sample route for HTTP
// app.get('/', (req, res) => {
//     res.send('Hello from HTTP!');
// });

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


const express = require('express');
const https = require('https');
const fs = require('fs');
const http = require('http');
const helmet = require('helmet');

const app = express();
const PORT_HTTP = 3000; 
const PORT_HTTPS = 3443;

app.use(helmet({
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }
}));

// Sample route for HTTP
app.get('/', (req, res) => {
    res.send('Hello from HTTP!');
});

// Sample route for HTTPS
app.get('/secure', (req, res) => {
    res.send('Hello from HTTPS!');
});

//test route
app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from the secure Express backend!" });
});

// Create HTTP server
http.createServer(app).listen(PORT_HTTP, () => {
    console.log(`HTTP Server running at http://localhost:${PORT_HTTP}`);
});


// Create HTTPS server with SSL certificate
const options = {
    key: fs.readFileSync('private-key.pem'), 
    cert: fs.readFileSync('certificate.pem'),
};

https.createServer(options, app).listen(PORT_HTTPS, () => {
    console.log(`HTTPS Server running at https://localhost:${PORT_HTTPS}`);
});