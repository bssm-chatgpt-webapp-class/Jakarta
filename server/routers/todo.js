const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const { validateToken } = require("../middlewares/auth");
const { hasAuth } = require("../middlewares/hasAuth");

router.get("/", async (req, res) => {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", validateToken, async (req, res) => {
  const data = req.body;

  await getConnection().execute(
    `insert into todo(todo, completed) values(?, ?)`,
    [data.todo, 0, req.user.id],
  );

  return res.json("success");
});

router.put("/:id", validateToken, hasAuth, async (req, res) => {
  const id = Number(req.params.id);
  const { todo, completed } = req.body;
  const [results] = await getConnection().execute(
    `select * from todo where id=?`,
    [id],
  );

  if (results.length === 0) {
    return res.status(403).json("없는유저");
  }

  if (results[0].id !== req.user.id) {
    return res.status(403).json("없는권한");
  }

  await getConnection().execute(
    `update todo set todo=?, completed=? where id=?`,
    [todo, completed, id],
  );
  return res.json("success");
});

router.delete("/:id", validateToken, hasAuth, async (req, res) => {
  const id = req.params.id;
  const [results] = await getConnection().execute(
    `select * from todo where id=?`,
    [id],
  );

  if (results.length === 0) {
    return res.status(403).json("없는유저");
  }

  if (results[0].id !== req.user.id) {
    return res.status(403).json("없는권한");
  }

  await getConnection().execute(`delete from todo where id=?`, [id]);
  return res.json("success");
});

module.exports = router;
