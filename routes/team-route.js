const router = require("express").Router();
const Team = require("../models/team-model");

router.use((req, res, next) => {
  console.log("Team route 正在接受一個 request...");
  next();
});
//計算勝率
const calculateWinRate = (wins, loses) => {
  return wins / (wins + loses);
};
//計算連勝/連敗

const calculateStreak = (matchHistory) => {
  if (!matchHistory || matchHistory.length === 0) return "N/A";
  let streakCount = 0;
  let streakType = "";
  for (let i = matchHistory.length - 1; i >= 0; i--) {
    if (matchHistory[i] === "W" || matchHistory[i] === "L") {
      if (streakType === "" || matchHistory[i] === streakType) {
        streakCount++;
        streakType = matchHistory[i];
      } else {
        console.log("err");
        break;
      }
    }
  }
  return streakType + streakCount;
};
//計算勝差
const calculateGamesBehind = async () => {
  const teams = await Team.find().sort({ winRate: -1 });
  if (teams.length === 0) return 0;
  const leader = teams[0];
  const leaderNetWins = leader.wins - leader.loses;

  return teams.map((team) => {
    const netWins = team.wins - team.loses; // 使用 losses（複數）
    return (leaderNetWins - netWins) / 2;
  });
};
router.get("/", async (req, res) => {
  try {
    const teams = await Team.find().sort({ winRate: -1 }); // 按勝率降序排序
    const teamsWithRank = teams.map((team, index) => ({
      ...team._doc,
      rank: String(index + 1).padStart(2, "0"), // 動態生成排名，如 "01", "02"...
    }));
    res.json(teamsWithRank);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  let { name, teamlogo, playedGame, wins, loses, matchHistory } = req.body;
  wins = Number(wins);
  loses = Number(loses);
  playedGame = Number(playedGame);

  const nameExist = await Team.findOne({ name: req.body.name });
  if (nameExist) return res.status(400).send(`球隊名稱已被使用過`);

  // 驗證輸入數據
  if (!name || !teamlogo || isNaN(playedGame) || isNaN(wins) || isNaN(loses)) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (wins < 0 || loses < 0 || playedGame < 0) {
    return res
      .status(400)
      .json({ error: "Wins, loses, and games played cannot be negative" });
  }
  if (wins + loses !== playedGame) {
    return res
      .status(400)
      .json({ error: "Wins + Loses must equal Games Played" });
  }

  try {
    // 計算勝率

    const winRate = calculateWinRate(wins, loses);

    // 計算連勝/連敗紀錄
    const streak = calculateStreak(matchHistory);

    let newTeam = new Team({
      name,
      teamlogo,
      playedGame,
      wins,
      loses,
      winRate,
      gamesBehind: 0,
      matchHistory: matchHistory || [],
      streak,
    });
    await newTeam.save();

    const allTeams = await Team.find().sort({ winRate: -1 });
    const gamesBehindValues = await calculateGamesBehind();
    const updatedGamesBehind = await Promise.all(
      allTeams.map(async (team, index) => {
        team.gamesBehind = gamesBehindValues[index].toFixed(1);
        return team.save();
      })
    );
    console.log(matchHistory);
    res.status(201).json(newTeam);
  } catch (e) {
    console.log("失敗");
  }
});

router.patch("/:name", async (req, res) => {
  try {
    const teamName = req.params.name; // 從 URL 參數獲取球隊名稱
    const updates = req.body; // 獲取要更新的字段（例如 { wins: 14, losses: 5, matchHistory: ["W", "L", "W"] }）

    // 驗證 updates 只包含允許的字段
    const allowedFields = [
      "wins",
      "loses",
      "playedGame",
      "matchHistory",
      "ticketWeb",
    ];
    const updateKeys = Object.keys(updates);
    if (!updateKeys.every((key) => allowedFields.includes(key))) {
      return res.status(400).json({ error: "Invalid field in update request" });
    }

    // 查找並更新球隊（部分更新）
    const team = await Team.findOne({ name: teamName }).exec();
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    // 準備更新數據
    let needsRecalculation = false; // 標記是否需要重新計算

    // 處理數值字段（wins、losses、playedGame）
    if (
      updates.wins !== undefined ||
      updates.loses !== undefined ||
      updates.playedGame !== undefined
    ) {
      const newWins =
        updates.wins !== undefined ? Number(updates.wins) : team.wins;
      const newLoses =
        updates.loses !== undefined ? Number(updates.loses) : team.loses;
      const newPlayedGame =
        updates.playedGame !== undefined
          ? Number(updates.playedGame)
          : team.playedGame;

      // 驗證數值
      if (isNaN(newWins) || isNaN(newLoses) || isNaN(newPlayedGame)) {
        return res.status(400).json({ error: "Invalid numeric value" });
      }
      if (newWins < 0 || newLoses < 0 || newPlayedGame < 0) {
        return res
          .status(400)
          .json({ error: "Wins, loses, and games played cannot be negative" });
      }
      if (newWins + newLoses !== newPlayedGame) {
        return res
          .status(400)
          .json({ error: "Wins + Loses must equal Games Played" });
      }

      // 更新數值字段
      if (updates.wins !== undefined) team.wins = newWins;
      if (updates.loses !== undefined) team.loses = newLoses;
      if (updates.playedGame !== undefined) team.playedGame = newPlayedGame;
      needsRecalculation = true;
    }
    if (updates.ticketWeb !== undefined) team.ticketWeb = updates.ticketWeb;

    // 處理 matchHistory（如果提供）
    if (updates.matchHistory !== undefined) {
      team.streak = calculateStreak(updates.matchHistory);
    } else {
      team.streak = calculateStreak(team.matchHistory);
    }

    // 如果需要重新計算勝率和連勝/連敗
    if (needsRecalculation) {
      team.winRate = calculateWinRate(team.wins, team.loses);
    }

    // 保存更新
    await team.save();
    // 重新計算所有球隊的勝差
    const allTeams = await Team.find().sort({ winRate: -1 });
    const gamesBehindValues = await calculateGamesBehind();
    const updatedGamesBehind = await Promise.all(
      allTeams.map(async (team, index) => {
        team.gamesBehind = gamesBehindValues[index].toFixed(1);
        return team.save();
      })
    );

    res.status(200).json(team); // 返回更新後的球隊數據
  } catch (err) {
    console.error("Error updating team:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
