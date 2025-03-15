import React, { useState, useEffect } from "react";
import { getTeams } from "../services/team.service";
import { getSchedule } from "../services/schedule.service";
import youtube from "../assets/youtube.svg";
import sportcast from "../assets/sportcast.svg";
import noise from "../assets/noise.webp";
import ticket from "../assets/ticket.png";
import statistics from "../assets/Statistics.svg";

const Game = () => {
  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]); // 所有賽程資料
  const [dayGames, setDayGames] = useState([]); // 當天比賽
  const [selectedDate, setSelectedDate] = useState(null); // 選中的日期

  // 獲取球隊資料
  const fetchTeams = async () => {
    try {
      const teamData = await getTeams();
      setTeams(teamData);
    } catch (e) {
      console.error("Failed to fetch teams:", e);
    }
  };

  // 獲取賽程資料並過濾
  const fetchSchedule = async () => {
    try {
      const scheduleData = await getSchedule();
      // 過濾出有 "upcoming" 比賽的資料
      const upcomingGames = scheduleData.filter(
        (game) => game.status === "upcoming"
      );
      setGames(upcomingGames);
      if (upcomingGames.length > 0 && !selectedDate) {
        setSelectedDate(upcomingGames[0].gameDate); // 設置第一場比賽的日期
      }
    } catch (e) {
      console.error("Failed to fetch schedule:", e);
    }
  };

  // 根據日期獲取當天比賽
  const fetchGamesByDate = async (date) => {
    if (!date) return;
    try {
      const [year, month, day] = date.split("-");
      const res = await fetch(
        `https://tpbl-clone.onrender.com/schedule/${year}/${month}/${day}`
      );
      const data = await res.json();
      const upcomingGames = data.filter((game) => game.status === "upcoming");
      setDayGames(upcomingGames);
    } catch (e) {
      console.error("Failed to fetch games:", e);
    }
  };

  // 獲取隊徽
  const getTeamLogo = (teamName) => {
    const team = teams.find((t) => t.name === teamName);
    return team?.teamlogo || "";
  };
  const getTeamTicket = (teamName) => {
    const team = teams.find((t) => t.name === teamName);
    return team?.ticketWeb || "";
  };

  // 過濾出唯一的日期（只保留有 upcoming 比賽的日期）
  const getUniqueDates = () => {
    const dateSet = new Set(); //Set物件，不能重複
    const uniqueGames = [];

    games.forEach((game) => {
      if (!dateSet.has(game.gameDate)) {
        dateSet.add(game.gameDate);
        uniqueGames.push(game);
      }
    });
    return uniqueGames;
  };

  useEffect(() => {
    fetchTeams();
    fetchSchedule();
  }, []); // 初次掛載時執行

  useEffect(() => {
    fetchGamesByDate(selectedDate);
  }, [selectedDate]); // 當 selectedDate 改變時執行

  return (
    <div>
      <div className="mb-10 flex-1">
        <div className="flex justify-between mb-3">
          <h2 className="text-en-heading-4">Match-up</h2>
          <h3 className="text-cn-paragraph-xl font-bold">賽程</h3>
        </div>
        <div className="bg-linear w-full  relative  ">
          <div className=" triangle2 absolute right-0 "></div>
          <div
            style={{ backgroundImage: `url(${noise})` }}
            className="table-bg  flex items-center   gap-3 overflow-x-scroll overflow-y-hidden pl-20 py-[0.4rem] "
          >
            {getUniqueDates()
              .slice(0, 7)
              .map((g, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setSelectedDate(g.gameDate)}
                >
                  <span className="font-bold text-cn-paragraph-xl">
                    {new Date(g.gameDate).toLocaleDateString("zh-TW", {
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </span>
                  <span className="text-[10px]">({g.day})</span>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white py-2 px-4">
          {dayGames.map((g, index) => (
            <div key={index}>
              <div className="broadcate flex justify-center gap-4 items-center">
                <span className="text-league-secondary-500 ">TV</span>
                <span>
                  <img
                    className="h-[10px]"
                    src="data:image/webp;base64,UklGRvYCAABXRUJQVlA4WAoAAAAQAAAAcwAAEwAAQUxQSHMCAAABkFZtexY5TxxkHQQHqYOMgmUUQBUMVdA42CpYULCsgsHB4IDXwcYB7znkSeh3+zMiHLhtG0mee7oulGO6f8C/devjyeYB2FsB0QLhDKsDYPsahKszZWAHIBzc/sckerYFtIkAZFEdsJxiDXA10juiVra9a0Q/gKdVVTf7Q/J6qt5yLGtQ1RHpVCNWrWgzS40hZIgZZsoQDj+kgcLKvhQCnVpCn2xmHhiFfLewZhKnh2II86EZIVyEODzQ5B9QIHuLH9OSSak0C7ISJiWUXg/5OpAlEuKxwEqRUYS6Uzo/H/JNIuqKTFGOuZmXvGVR65B1wLdD7xBioJnkBKglkpmih9McGUeoDwA092Yy7htqupZNRinUHTjJHHVI51RTC7h4BPheB8JEVs4fpX8DYOZDLyQ5sOJ3zOCcu6g+jOjaHxvAmSOr1Go2Rwf6LDpOKbWOY6vnglDgr0WEe0BR3Hx8nM/QiG7H0D44VxnpyDpWayaAF1V1EwHVrdTlAKQY+aSHbDGiWtDAtr23DtZRBXZv+HnzwHfUbKT+6XhtkDoQVXHFQgWBLzv2i6reeYQVOaXrEqeHme9AzCxmFVlU92ecZI69nkhuvAZUgZ4xk1UpegxFx5ocwFD9MN447g0w6eW6d7hS7Ykm6e5QzxxZk+tzLF+VFDLEQkBiIZUVIomkIkSTqiOVRcjIK3DVRXZHP2JduRKiutpsFUfWHkE1jUV1akCphycSm6oLbnH6KD7G2gyNjn2YtuPZCOW0SbKUTU5/H+jjzQJtvDkAPhZbOAPyRALHWAzMHB0pMCtvcRybuTNLexHpK339aPFnbTaE4PC/uwEAVlA4IFwAAAAQBQCdASp0ABQAPp1InUqiIiIjKBQLULATiWcAy9huAJoSAjXqGbzYDtqidap0JlWMAP70TTcZSmtKFJzrwduVtDgDOgs38w+p/6XJguLlw4uSgBTBenMgYAAAAA=="
                  />
                </span>
                <span className="text-league-secondary-500">MOD</span>
                <span>
                  <img className="h-[10px]" src={sportcast} />
                </span>
                <span className="text-league-secondary-500">OTT</span>
                <span>
                  <img src={youtube} width="45" />
                </span>
              </div>
              <div className="flex justify-center items-center">
                <div className="mt-5 flex flex-col items-center flex-[0_0_25%]">
                  <img
                    src={getTeamLogo(g.awayteam)}
                    width="48"
                    alt={`${g.awayteam} logo`}
                  />
                  <p className="text-cn-paragraph-sm mt-2 text-center">
                    {g.awayteam}
                  </p>
                  <label className="mt-2 w-[44px] bg-slate-400 rounded-full text-label-sm py-1 px-2">
                    AWAY
                  </label>
                </div>
                <div className="text-center flex-[0_0_50%]">
                  <span className="block text-en-heading-2 mt-2">{g.time}</span>
                  <span className="block text-[12px] mt-1">{g.location}</span>
                </div>
                <div className="mt-5 flex flex-col items-center flex-[0_0_25%]">
                  <img
                    src={getTeamLogo(g.hometeam)}
                    width="48"
                    alt={`${g.hometeam} logo`}
                  />
                  <p className="text-cn-paragraph-sm mt-2">{g.hometeam}</p>
                  <label className="mt-2 bg-league-primary text-white rounded-full text-label-sm py-1 px-2">
                    HOME
                  </label>
                </div>
              </div>
              <div className="flex justify-around border-b border-gray-300 gap-4">
                <a
                  className="bg-white text-cn-paragraph-sm py-4 hover:underline underline-offset-4 flex gap-2"
                  href={getTeamTicket(g.hometeam)}
                  target="_blank"
                >
                  <img src={ticket} />
                  <span>購票連結</span>
                </a>
                <a
                  className="bg-white text-cn-paragraph-sm py-4 hover:underline underline-offset-4 flex gap-2"
                  href="https://ticket.ibon.com.tw/ActivityInfo/Details/38588"
                  target="_blank"
                >
                  <img src={statistics} className="h-[16px]" />
                  <span>數據統計</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
