const express = require("express");
const app = express();
const ShortUrl = require("./models/shortUrl");
const connectDB = require("./db/connect");

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
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

app.get("/", async (req, res) => {
	const shortUrls = await ShortUrl.find();
	res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
	await ShortUrl.create({ full: req.body.fullUrl });

	res.redirect("/");
});
