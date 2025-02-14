const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize("myempdb", 'root', 'tayyab!23', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

try {
    sequelize.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.log("Connection failed", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Contact = require("./contact")(sequelize, Sequelize);

// force true means remove the previous db and create new everytime when application will start
sequelize.sync({ force: false }).then(() => {
    console.log("Tables created");
}).catch((err) => {
    console.log("Tables not created", err);
});

module.exports = db;