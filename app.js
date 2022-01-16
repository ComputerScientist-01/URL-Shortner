const express = require("express");
const app = express();

const connectDB = require("./db/connect");

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// start mongo db connection
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
	} catch (error) {
		console.log(error);
	}
};

start();

app.listen(process.env.PORT || 3000, console.log(`Server running on port ${process.env.PORT || 3000}`));
