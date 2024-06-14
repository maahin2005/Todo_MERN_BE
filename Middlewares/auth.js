const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token not found" });

  const decoded = jwt.verify(token, "JWT_SECRET");

  req.body.userId = decoded.userId;
  req.body.username = decoded.username;

  next();
};

module.exports = auth;
