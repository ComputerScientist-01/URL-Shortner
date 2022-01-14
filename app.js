const express = require("express");
const app = express();
const connectDB = require("./db/connect");

require("dotenv").config();
app.set("view engine", "ejs");

const port = 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URL);
		app.listen(port, process.stdout.write(`Server is listening on ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();

app.post("/shortUrls", function (req, res) {
	res.send("POST request to the homepage");
});

app.get("/", (req, res) => {
	res.render("index");
});
