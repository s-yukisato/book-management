const router = require("express").Router();

const { signup, signin, getUser } = require("../controllers/usersController");
const authenticate = require("../authenticate")

router.post("/signup", signup)

router.post("/signin", signin)

router.get("/auth", authenticate, getUser)

module.exports = router;
