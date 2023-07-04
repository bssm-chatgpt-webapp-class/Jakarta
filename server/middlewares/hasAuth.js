const { getConnection } = require("../models/connector");

const hasAuth = async (req, res, next) => {
  const id = Number(req.params.id);
  console.log(`id : ${id}`);
  const [results] = await getConnection().execute(
    `select * from user where id=?`,
    [id],
  );
  console.log(results[0]);
  if (results.lenght === 0) {
    return req.status(400).json("없음");
  }

  if (results[0].id !== req.user.id) {
    return res.status(401).json("권한없음");
  }

  next();
};

module.exports = { hasAuth };
