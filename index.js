const express = require("express");
const bodyParser = require("body-parser");

// require("./models/index");


// const User = require("./models/user");
// const Contact = require("./models/contact");

var db = require("./models");
const app = express();

// const User = require("./models/user");
app.use(bodyParser.json());


app.get("/", async (req, res) => {
    var d = await db.User.findAll();
    // console.log(d);
    res.status(200).json(d);
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})