const express = require("express");
const { addUser, getAllUsers, getUserById, deleteUserById, deleteWithQueryParam,
    updateUser, putupdateuser
} = require("../controllers/userController");
const router = express.Router();
const { validateUserPut } = require("../middlewares/custommiddleware");

router.post("/add-user", addUser);
router.get("/get-users", getAllUsers);
router.get("/get-user/:id", getUserById);
router.delete("/delete-user/:id", deleteUserById);
router.patch("/patch-update-user/:id", updateUser);

//router.patch("/update-user/:id", validateUserPut, updateUser);

// ---- Note ---- 

// Key Differences Explained

//     Completeness of Data

//         PUT: Needs all mandatory fields ("I'm giving you a complete new version")

//         PATCH: Only needs modified fields ("Just change this one thing")

router.put("/update-user/:id", validateUserPut, putupdateuser);

router.delete("/delete-user-with-queryparam/:id", deleteWithQueryParam);


module.exports = router;

