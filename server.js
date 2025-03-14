const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const teamRoutes = require("./routes/team-route");
const scheduleRoutes = require("./routes/schedule-route");
const path = require("path");
const port = process.env.PORT || 8080; //網站部署會自動設定 porecess.env.PORT

mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log("連接到 mongodb...");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/team", teamRoutes);
app.use("/schedule", scheduleRoutes);
app.use(express, static(path.join(__dirname, "client", "build")));

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("後堆伺服器正在聆聽port 8080...");
});
