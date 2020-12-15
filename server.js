const cors = require('cors');
const express = require('express');
const path = require('path');
const server = express()

const PORT = process.env.PORT || 3000;

const corsOptions = {
    exposedHeaders: 'authorization, x-refresh-token, x-token-expiry-time'
};

// Set CORS policies
server.use(cors(corsOptions))

// Server static files in client dirs
server.use('/', express.static(path.join(__dirname, 'client')));

// Run server on port
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});