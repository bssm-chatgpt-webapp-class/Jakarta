const express = require("express");
const router = require("./routers");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(4000);
