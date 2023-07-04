const express = require("express");
require("dotenv").config();
const router = require("./routers");
const app = express();
const { connect } = require("./models/connector");
const env = require("./config/env");

connect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(env.dbPort);

// RDB : optional chaining 방지 -> 중요한 데이터 저장하기 좋음
// NoSQL : join 필요 없음 -> 조회 성능 좋음
