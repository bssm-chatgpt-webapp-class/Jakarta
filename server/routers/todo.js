const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");

router.get("/", async (req, res) => {
  const [results] = await getConnection().execute(`SELECT * FROM todo`);
  res.json(results);
});

router.post("/", async (req, res) => {
  const data = req.body;
  await getConnection().execute(`insert into todo(todo, completed) values(?, ?)`, [
    data.todo,
    0,
  ]);
  return res.json("success");
});

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { todo, completed } = req.body;
  await getConnection().execute(`update todo set todo=?, completed=? where id=?`, [
    todo,
    completed,
    id,
  ]);
  return res.json("success");
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await getConnection().execute(`delete from todo where id=?`, [id]);
  return res.json("success");
});

module.exports = router;
