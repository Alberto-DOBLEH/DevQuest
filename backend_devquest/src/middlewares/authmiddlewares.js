// middlewares/auth.middleware.js
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/jwt");

module.exports = (req, res, next) => {
  const header = req.headers["authorization"];

  if (!header) {
    return res.status(403).json({ error: "Token no proporcionado" });
  }

  const token = header.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};
