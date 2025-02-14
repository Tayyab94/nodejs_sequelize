const express = require("express");
const { addUser, getAllUsers, getUserById, deleteUserById, deleteWithQueryParam,
    updateUser
} = require("../controllers/userController");
const router = express.Router();

router.post("/add-user", addUser);
router.get("/get-users", getAllUsers);
router.get("/get-user/:id", getUserById);
router.delete("/delete-user/:id", deleteUserById);
router.patch("/update-user/:id", updateUser);

router.delete("/delete-user-with-queryparam/:id", deleteWithQueryParam);


module.exports = router;

