
var db = require("../models");

const User = db.User;

exports.addUser = async (req, res) => {
    const data = req.body;

    const user = await User.create({ 'firstName': data.firstName, 'lastName': data.lastName, 'email': data.email });
    console.log(user);
    console.log("User Added");

    res.status(201).json(user);
}

exports.addUser_withCreate = async (req, res) => {
    const data = req.body;
    const user = User.build({ 'firstName': data.firstName, 'lastName': data.lastName, 'email': data.email });

    await user.save();
    console.log("User Added");
    res.status(201).json(user);
}

exports.getAllUsers = async (req, res) => {
    const data = await User.findAll();
    console.log(data.length);
    res.status(201).json(data);
}

