const express = require("express");
const { addUser, getAllUsers } = require("../controllers/userController");
const router = express.Router();

router.post("/add-user", addUser);
router.get("/get-users", getAllUsers);

module.exports = router;

