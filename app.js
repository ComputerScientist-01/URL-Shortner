const express = require("express");
const app = express();
const ShortUrl = require("./models/shortUrl");
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

/**
 * When the user visits the root URL, render the index template.
 */
app.get("/", async (req, res) => {
	const shortUrls = await ShortUrl.find();
	res.render("index", { shortUrls: shortUrls });
});

/*
 * Create a new short URL.
 */
app.post("/shortUrls", async (req, res) => {
	await ShortUrl.create({ full: req.body.fullUrl });

	res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
	const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
	if (shortUrl === null) return res.sendStatus(404);

	shortUrl.clicks++;
	shortUrl.save();

	res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 3000);

