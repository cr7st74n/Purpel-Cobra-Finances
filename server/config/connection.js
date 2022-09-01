const mongoose = require('mongoose');
const URL = process.env.ATLAS_CONNECT_URL ? process.env.ATLAS_CONNECT_URL : 'mongodb://localhost:27017/purple-cobras-db';

mongoose.connect(URL);

module.exports = mongoose.connection;