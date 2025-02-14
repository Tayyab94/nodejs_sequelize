const express = require("express");
const bodyParser = require("body-parser");

// require("./models/index");
// const User = require("./models/user");
// const Contact = require("./models/contact");

var db = require("./models");

const userRoutes = require("./routes/userRoutes");


// const User = require("./models/user");
const app = express();

app.use(bodyParser.json());
app.use("/api", userRoutes);

app.listen(3001, () => {
    console.log("Server is running on port 3000");
})