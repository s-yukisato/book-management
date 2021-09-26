const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressJwt = require("express-jwt");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const authRoute = require("./routes/auth");
const data = require("./routes/data");
const library = require("./routes/library");
const project = require("./routes/project");

require("dotenv").config();

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.CONNECTION_URL, connectOptions, () => {
  console.log("Success!");
});

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1/user", authRoute);
app.use("/api/data", data);
app.use("/api/v1/library", library);
app.use("/api/v1/document", project);

app.use(cookieParser());
app.use(
  expressJwt({
    secret: process.env.ACCESS_TOKEN_SECRET,
    algorithms: ["HS256"],
    getToken: (req) => req.cookies.token,
  })
);
const csrfProtection = csrf({
  cookie: true,
});
app.use(csrfProtection);

app.get("/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}!`);
});
