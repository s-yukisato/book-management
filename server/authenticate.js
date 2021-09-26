// 認証用ミドルウェア
const authenticate = (req, res, next) => {
  let token;
  if (req.headers.cookie) {
    const regexp = /(token=.*(?=;)|token=.*$)/;
    token = regexp.exec(req.headers.cookie)[0].slice(6);
    if (token == null) {
      return res.json({ status: 400, message: "Not found token" });
    }
  } else {
    return res.json({ status: 400, message: "Not found cookie" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.json({ status: 400, message: err.message });
    } else {
      req.user = decoded;
      next();
    }
  });
};

module.exports = authenticate