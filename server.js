const express = require('express');
const https = require('https');
const fs = require('fs');
const http = require('http');
const path = require('path'); // TEST
const helmet = require('helmet'); // Import hsts for HSTS support

const app = express();
const PORT_HTTP = 3000; // Port for HTTP
const PORT_HTTPS = 3443; // Port for HTTPS

//helmet
app.use(helmet());
//TEST
app.use(express.static(path.join(__dirname, 'client', 'public')));

// Sample route for HTTP
app.get('/', (req, res) => {
    res.send('Hello from HTTP!');
});

// Sample route for HTTPS
app.get('/secure', (req, res) => {
    res.send('Hello from HTTPS!');
});

// Apply HSTS middleware to the HTTPS server
const hstsOptions = {
    maxAge: 31536000, // 1 year in seconds
    includeSubDomains: true, // Apply HSTS to all subdomains
    preload: true // Include this site in the HSTS preload list
};

// Create HTTP server
http.createServer(app).listen(PORT_HTTP, () => {
    console.log(`HTTP Server running at http://localhost:${PORT_HTTP}`);
});

//https
const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem'),
};

https.createServer(options, app).listen(PORT_HTTPS, () => {
    console.log(`HTTPS Server running at https://localhost:${PORT_HTTPS}`);
});
