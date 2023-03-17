const router = require("express").Router();
const {
    register,
    login,
    updateUserById,
    deleteUserById,
    getUser,
    getUsers
} = require('../user/user.controller');
const { checkToken } = require('../../auth/authToken')

router.post("/register", register);
router.post("/login", login);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUser);
router.patch("/", checkToken, updateUserById);
router.delete("/", checkToken, deleteUserById);

module.exports = router;