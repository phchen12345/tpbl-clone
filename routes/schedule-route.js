const router = require("express").Router();
const Team = require("../models/team-model");
const Schedule = require("../models/schedule-model");

router.use((req, res, next) => {
  console.log("Schedule route 正在接受一個 request...");
  next();
});

router.get("/", async (req, res) => {
  try {
    const schedule = await Schedule.find().sort({ gameDate: 1 });
    res.json(schedule);
  } catch (e) {
    console.log(e);
  }
});

router.get("/:year/:month", async (req, res) => {
  try {
    const year = parseInt(req.params.year, 10);
    const month = parseInt(req.params.month, 10);

    // 計算當月的第一天和最後一天
    const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
    const endDate = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));

    // console.log(
    //   `查詢範圍: ${startDate.toISOString()} - ${endDate.toISOString()}`
    // );

    // 查詢該月份的比賽
    const games = await Schedule.find({
      gameDate: { $gte: startDate, $lte: endDate }, // 選取當月範圍
    }).sort({ gameDate: 1, time: 1 });
    // 依照比賽日期升序排列
    console.log(games);

    res.json(games);
  } catch (e) {
    console.error("取得指定月份賽事時發生錯誤:", e);
    res.status(500).json({ error: "伺服器錯誤" });
  }
});

router.get("/:year/:month/:day", async (req, res) => {
  try {
    const year = parseInt(req.params.year, 10);
    const month = parseInt(req.params.month, 10);
    const day = parseInt(req.params.day, 10);

    // 計算當月的第一天和最後一天
    const startDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
    const endDate = new Date(
      Date.UTC(year, month - 1, day, 0, 23, 59, 59, 999)
    );

    // console.log(
    //   `查詢範圍: ${startDate.toISOString()} - ${endDate.toISOString()}`
    // );

    // 查詢該月份的比賽
    const games = await Schedule.find({
      gameDate: { $gte: startDate, $lte: endDate }, // 選取當月範圍
    }).sort({ gameDate: 1, time: 1 }); // 依照比賽日期升序排列

    res.json(games);
  } catch (e) {
    console.error("取得指定月份賽事時發生錯誤:", e);
    res.status(500).json({ error: "伺服器錯誤" });
  }
});

router.get("/upcoming", async (req, res) => {
  try {
    const upcomingGames = await Schedule.find({ status: "upcoming" }).sort({
      gameDate: 1,
      time: 1,
    });

    res.json(upcomingGames);
  } catch (e) {
    console.error("取得未完成比賽錯誤:", e);
    res.status(500).json({ error: "伺服器錯誤" });
  }
});

router.get("/completed", async (req, res) => {
  try {
    const completedGames = await Schedule.find({ status: "completed" }).sort({
      gameDate: 1,
    });

    res.json(completedGames);
  } catch (e) {
    console.error("取得已完成比賽錯誤:", e);
    res.status(500).json({ error: "伺服器錯誤" });
  }
});

module.exports = router;
