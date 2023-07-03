const express = require("express");
const router = express.Router();

let database = [
  {
    id: 1,
    text: "할 일 1",
  },
];
let currentId = 2;

router.get("/todo", (req, res) => {
  res.json(database);
});

router.post("/todo", (req, res) => {
  const data = req.body;
  console.log(data);
  database.push({ id: currentId++, text: data.text });
  return res.json("success");
});

router.put("/todo/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedIndex = database.findIndex((data) => data.id === id);
  database[updatedIndex].text = req.body.text;
  return res.json("success");
});

router.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  console.log(`id : ${id}`);
  database = database.filter((data) => data.id !== Number(id));
  return res.json("success");
});

module.exports = router;
