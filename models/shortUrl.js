const mongoose = require("mongoose");
const nanoid = require("nanoid");

const shortUrlSchema = new mongoose.Schema({
	full: {
		type: "string",
		required: true,
	},
	short: {
		type: String,
		default: () => nanoid(),
	},
	clicks: {
		type: Number,
		required: true,
		default: 0,
	},
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
