const router = require("express").Router();

const { signup, signin, signout, getUser } = require("../controllers/usersController");
const authenticate = require("../authenticate")

router.post("/signup", signup)

router.post("/signin", signin)

router.get("/signout", authenticate, signout)

router.get("/auth", authenticate, getUser)

module.exports = router;
