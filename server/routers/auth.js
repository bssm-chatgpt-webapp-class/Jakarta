const express = require("express");
const router = express.Router();
const { getConnection } = require("../models/connector");
const jwt = require("jsonwebtoken");

router.post("/signin", async (req, res) => {
  const { email, pw } = req.body;
  const [results] = await getConnection().execute(
    `SELECT * FROM user where email=? and password=?`,
    [email, pw],
  );

  if (results.length === 0) {
    return res.json("no user");
  }

  const token = jwt.sign({ email }, "secret");

  res.json(token);
});

router.post("/signup", async (req, res) => {
  const { email, pw } = req.body;
  await getConnection().execute(`insert into user(email, password) values(?, ?)`, [
    email,
    pw,
  ]);
  return res.json("success");
});

module.exports = router;
