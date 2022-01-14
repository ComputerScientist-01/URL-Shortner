const mongoose = require("mongoose");

/**
 * Connect to the database.
 * @param url - The URL of the database to connect to.
 * @returns The mongoose connection object.
 */
const connectDB = (url) => {
	return mongoose.connect(url);
};

module.exports = connectDB;
