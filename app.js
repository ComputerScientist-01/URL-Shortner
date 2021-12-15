const express = require("express");
const app = express();
app.listen(process.env.PORT || 5000);
const connectDB = require("./db/connect");

require("dotenv").config();
app.set("view engine", "ejs");

app.post("/shortUrls", function (req, res) {
	res.send("POST request to the homepage");
});

app.get("/", (req, res) => {
	res.render("index");
});

//const mySchema = new Schema({
// _id: {
// 	type: String,
// 	default: () => nanoid()
//   }
// })
