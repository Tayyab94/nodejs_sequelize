
var db = require("../models");

const User = db.User;

const { Op } = require("sequelize");
exports.addUser = async (req, res) => {
    try {
        const data = req.body;

        if (data.length > 1) {
            var user = await User.bulkCreate(data);
        } else {
            var user = await User.create({ 'firstName': data.firstName, 'lastName': data.lastName, 'email': data.email });
        }

        if ((Array.isArray(user) && user.length > 0) || (user.isNewRecord == false)) {
            console.log("User Added");
            return res.status(201).json({ data: user });
        }

        res.status(400).json({ data: "User not added" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
    }
}

exports.addUser_withCreate = async (req, res) => {
    const data = req.body;
    const user = User.build({ 'firstName': data.firstName, 'lastName': data.lastName, 'email': data.email });

    await user.save();
    console.log("User Added");
    res.status(201).json({ data: user });
}

exports.getAllUsers = async (req, res) => {
    const data = await User.findAll();
    console.log(data.length);
    res.status(201).json({ data: data });
}

exports.getUserById = async (req, res) => {
    const id = req.params.id;

    const data = await User.findOne({
        where: {
            id: id
        }
    });

    res.status(data == null ? 400 : 200).json({ data: data == null ? "No User Found" : data });
}

exports.deleteUserById = async (req, res) => {
    const id = req.params.id;
    const data = await User.destroy(
        {
            where: {
                id: id
            }
        }
    );

    res.status(data == 0 ? 400 : 200).json({ data: data == 0 ? "No User Found" : "User Deleted" });
}

exports.deleteWithQueryParam = async (req, res) => {
    const id = req.params.id;

    const { firstName } = req.query;

    console.log(`id ${id} User first Name ${firstName}`);

    if (!firstName) {
        return res.status(400).json({ message: "First Name is required" });
    }


    const data = await User.destroy(
        {
            where: {
                id: id,
                firstName: firstName
            }
        }
    );

    res.status(data == 0 ? 400 : 200).json({ data: data == 0 ? "No User Found" : "User Deleted" });
}


exports.updateUser = async (req, res) => {
    const updatedUser = req.body;
    const id = req.params.id;

    try {
        const data = await User.update(updatedUser, {
            where: {
                id: id
            }
        });

        res.status(data == 0 ? 400 : 200).json({ data: data == 0 ? "No User Found" : "User Updated" });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!" });
    }

}
