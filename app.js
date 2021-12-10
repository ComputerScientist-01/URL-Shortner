const express = require("express");
const app = express();
app.listen(process.env.PORT || 5000);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index");
});
