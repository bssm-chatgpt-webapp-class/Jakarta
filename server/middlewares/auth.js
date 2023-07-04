const jwt = require("jsonwebtoken");
const { getConnection } = require("../models/connector");

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const tokenResult = jwt.verify(token, "secret");
    const [results] = await getConnection().execute(
      `SELECT * FROM user where id=?`,
      [tokenResult.id],
    );

    if (results.length === 0) {
      return res.status(403).json("없는유저");
    }

    req.user = results[0];

    next();
  } catch (err) {
    console.log(`error : ${err}`);
    return res.status(403).json("나가");
  }
};

module.exports = { validateToken };
