const router = require('express').Router()

const ShortUrl = require("../models/shortUrl");

/**
 * When the user visits the root URL, render the index template.
 */
router.get("/", async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render("index", { shortUrls: shortUrls });
});

/*
 * Create a new short URL.
 */
router.post("/shortUrls", async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl });

    res.redirect("/");
});

/**
 * We create a new short URL by calling the `ShortUrl.create` method,
 * which returns a promise. We then save the
 * new short URL to the database.
 */

router.get("/:shortUrl", async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (shortUrl === null) return res.sendStatus(404).json({ message: 'URL not found!!' });

    shortUrl.clicks++;
    shortUrl.save();

    res.redirect(shortUrl.full);
});


module.exports = router