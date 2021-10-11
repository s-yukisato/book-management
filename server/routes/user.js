const router = require("express").Router();

const { getUser, updateUser } = require("../controllers/usersController")

router.get("/", getUser)

router.put("/", updateUser)

module.exports = router;