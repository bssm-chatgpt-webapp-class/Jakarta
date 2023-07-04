const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", async (req, res) => {
  const data = req.body;
  const token = req.headers.authorization;
  // 1. 정상적으로 유저 나옴
  // 2. 만료됐을 때
  // 3. 잘못된 jwt
  try {
    const tokenResult = jwt.verify(token, "secret");
    console.log(tokenResult);
    console.log(token);
    await getConnection().execute(
      `insert into todo(todo, completed) values(?, ?)`,
      [data.todo, 0, tokenResult.id],
    );

    return res.json("success");
  } catch (err) {
    return res.status(403).json("invalid token");
  }
});

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { todo, completed } = req.body;
  await getConnection().execute(
    `update todo set todo=?, completed=? where id=?`,
    [todo, completed, id],
  );
  return res.json("success");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const token = req.headers.authorization;

  try {
    const tokenResult = jwt.verify(token, "secret");
    const currentId = tokenResult.id;

    const [results] = await getConnection().execute(
      `select * from todo where id=?`,
      [id],
    );
    console.log(results[0].id, currentId);
    if (results[0].id !== currentId) {
      return res.status(401).json("나가1");
    }

    await getConnection().execute(`delete from todo where id=?`, [
      tokenResult.id,
    ]);
    return res.json("success");
  } catch (err) {
    console.log(err);
    return res.status(403).json("나가2");
  }
});

module.exports = router;
