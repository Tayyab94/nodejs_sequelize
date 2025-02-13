// const { DataTypes } = require("sequelize");

// // const sequelize = new Sequelize("sqlite::memory")

// const sequelize = require("./index");


// user.sync().then(() => {
//     console.log("User Table Created");
// }).catch((err) => {
//     console.log(err);
// });

module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define("user", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        }, lastName: {
            type: DataTypes.STRING,
            defaultValue: "Hello"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            // other model options go here
            tableName: "users",
            timestamps: false,
        }
    );

    return user;
}