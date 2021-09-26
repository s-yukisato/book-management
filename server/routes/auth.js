const router = require("express").Router();

const { signup, signin, getInfo } = require("../controllers/usersController");
const authenticate = require("../authenticate")

router.post("/signup", signup)

router.post("/signin", signin)

router.get("/auth", authenticate, getInfo)

module.exports = router;
