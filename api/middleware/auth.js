import jwt from "jsonwebtoken";

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({ auth: false, message: "No autorizado." });
  }

  return next();
};

export default verifyToken;
