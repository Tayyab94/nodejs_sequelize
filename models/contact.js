// const { DataTypes } = require("sequelize");

// // const sequelize = new Sequelize("sqlite::memory")

// const sequelize = require("./index");


module.exports = (sequelize, DataTypes) => {
    const contact = sequelize.define("contacts", {
        permanent_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
        }
    },
        {
            // other model options go here
            tableName: "cotnacts",
        }
    );

    return contact;
}

// contact.sync().then(() => {
//     console.log("User Table Created");
// }).catch((err) => {
//     console.log(err);
// });
