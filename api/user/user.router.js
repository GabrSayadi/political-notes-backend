const router = require("express").Router();
const {
    register,
    login,
    updateUserById,
    deleteUserById,
    getUser,
    getUsers
} = require('../user/user.controller');


router.post("/register", register);
router.post("/login", login);
router.patch("/", updateUserById);
router.delete("/", deleteUserById);
router.get("/:id", getUser);
router.get("/", getUsers);


module.exports = router;