const mongoose = require("mongoose");

const connection = (uri) => mongoose.connect(uri);

module.exports = connection;
