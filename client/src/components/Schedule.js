import React from "react";
import { useState, useEffect } from "react";
import { getSchedule } from "../services/schedule.service";
import { getTeams } from "../services/team.service";
import youtube from "../assets/youtube.svg";
import sportcast from "../assets/sportcast.svg";
import ticket from "../assets/ticket.png";
import statistics from "../assets/Statistics.svg";

const Schedule = () => {
  const [selectedOption, setSelectedOption] = useState("全部時間");
  const [selectedOption1, setSelectedOption1] = useState("2024-25賽季");
  const [Month, setMonth] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("upcoming");
  const [games, setGames] = useState([]);
  const [upcomingCount, setUpcomingCount] = useState(0); // 未完成場數
  const [completedCount, setCompletedCount] = useState(0); // 已完成場數
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleValue1 = (tab) => {
    setSelectedOption1(tab);
  };

  const fetchTeams = async () => {
    try {
      const res = await getTeams();

      setTeams(res);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchGameCounts = async () => {
    let url = `https://tpbl-clone.onrender.com/schedule/`;
    if (Month) {
      const [year, month] = Month.split("-");
      url += `${year}/${month}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    const filteredData = data.filter(
      (game) =>
        (!selectedTeam ||
          game.hometeam === selectedTeam ||
          game.awayteam === selectedTeam) &&
        (!selectedCategory || game.category === selectedCategory)
    );

    const upcomingGames = filteredData.filter(
      (game) => game.status === "upcoming"
    );
    const completedGames = filteredData.filter(
      (game) => game.status === "completed"
    );

    setUpcomingCount(upcomingGames.length);
    setCompletedCount(completedGames.length);
  };

  const fetchGames = async (year, month) => {
    let url = `https://tpbl-clone.onrender.com/schedule/`;
    if (Month) {
      const [year, month] = Month.split("-");
      url += `${year}/${month}`;
    } else {
      url += `${selectedStatus}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    const filteredData = data.filter(
      (game) =>
        (!selectedTeam ||
          game.hometeam === selectedTeam ||
          game.awayteam === selectedTeam) &&
        (!selectedCategory || game.category === selectedCategory) &&
        game.status === selectedStatus
    );

    setGames(filteredData);
  };

  const getTeamWinLose = (teamName) => {
    const team = teams.find((t) => t.name === teamName);

    return `${team.wins}-${team.loses}`;
  };
  const getTeamLogo = (teamName) => {
    const team = teams.find((t) => t.name === teamName);
    return `${team.teamlogo}`;
  };

  const getTeamTicket = (teamName) => {
    const team = teams.find((t) => t.name === teamName);
    return team?.ticketWeb || "";
  };

  useEffect(() => {
    document.title = "賽程 | TPBL";
    fetchTeams();

    fetchGameCounts();
  }, [selectedStatus, Month, selectedTeam, selectedCategory]);

  useEffect(() => {
    if (teams.length > 0) {
      fetchGames();
    }
  }, [teams]);

  return (
    <div className="mb-[200px]">
      <section className="bg-inner-head mb-20 max-sm:mb-10">
        <div className="bg2 pb-20 pt-[125px]">
          <div className="flex col-span-12">
            <div className="flex items-center gap-6">
              <h2 className="text-white text-en-display-3">Schedule</h2>
              <h2 className="text-white text-league-secondary text-cn-heading-4">
                賽程
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg2 mb-12">
        <div className="flex flex-wrap col-span-12 items-center justify-between">
          <div className=" flex  cursor-pointer ">
            <div
              onClick={() => setSelectedStatus("upcoming")}
              className="relative "
            >
              <div className="flex  justify-center items-center gap-1">
                <span
                  className={`  ${
                    selectedStatus === "upcoming"
                      ? " border-b-4 border-league-primary w-full bottom-0 absolute  underline-expand-active "
                      : " border-b-4 border-league-primary w-full bottom-0 absolute  underline-collapse-active"
                  }`}
                ></span>
                <div className="px-8  pb-6 pt-2">
                  <span className="text-cn-heading-5 ">未完成比賽</span>
                  <span className=""> ({upcomingCount})</span>
                </div>
              </div>
            </div>

            <div
              onClick={() => setSelectedStatus("completed")}
              className="relative  "
            >
              <div className="flex  justify-center items-center gap-1">
                <span
                  className={`  ${
                    selectedStatus === "completed"
                      ? " border-b-4 border-league-primary w-full bottom-0 absolute  underline-expand-active "
                      : " border-b-4 border-league-primary w-full bottom-0 absolute  underline-collapse-active"
                  }`}
                ></span>
                <div className="px-8  pb-6 pt-2 ">
                  <span className="text-cn-heading-5 ">已完成比賽</span>
                  <span className=""> ({completedCount})</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 relative flex-wrap">
            <div className="hover:border-black duration-200 relative bg-white   border border-league-secondary-100 flex  ">
              <div className="min-w-[115px] py-[18px] flex-1 px-4 font-medium">
                {selectedOption1}
              </div>
              <div className="border-l border-league-secondary-100 flex justify-center items-center p-4">
                <span className="chevron-down text-[24px] "></span>
              </div>

              <select className="absolute top-0 left-0 w-full h-full opacity-0  appearance-none ">
                <option value="" onClick={() => handleValue1("2024-25賽季")}>
                  2024-25賽季
                </option>
              </select>
            </div>
            <div
              className={`hover:border-black duration-200 relative bg-white border flex h-full ${
                Month === "" ? "border-league-secondary-100" : "border-black "
              }`}
            >
              <div className="px-4 py-[18px] min-w-[115px] flex-1 font-medium">
                {selectedOption}
              </div>
              <div
                className={` border-l border-league-secondary-100 flex items-center justify-center p-4 ${
                  Month === "" ? "bg-white" : "dropdown  "
                }`}
              >
                <span className="chevron-down text-[24px] "></span>
              </div>

              <select
                className={`absolute top-0 left-0 w-full h-full opacity-0  appearance-none `}
                onChange={(e) => {
                  const value = e.target.value;
                  setMonth(value);
                  if (value === "") {
                    setSelectedOption("全部時間");
                  } else {
                    const month = value.split("-")[1]; // 提取月份部分，例如 "01" -> "1月"
                    setSelectedOption(`${parseInt(month)}月`);
                  }
                }}
              >
                <option value="">全部時間</option>
                <option value="2024-01">1月</option>
                <option value="2024-02">2月</option>
                <option value="2024-03">3月</option>
              </select>
            </div>
            <div
              className={`hover:border-black duration-200 relative bg-white border  ${
                selectedTeam === ""
                  ? "border-league-secondary-100"
                  : "border-black "
              }`}
            >
              <div className=" flex  ">
                <div className="px-4 py-[18px] font-medium flex-1 min-w-[115px]">
                  {!selectedTeam && <div>全部球隊</div>}
                  {selectedTeam && <div>{selectedTeam}</div>}
                </div>
                <div
                  className={` border-l border-league-secondary-100 flex items-center justify-center p-4 ${
                    selectedTeam === "" ? "bg-white" : "dropdown  "
                  }`}
                >
                  <span className="chevron-down text-[24px] "></span>
                </div>
              </div>
              <select
                className="absolute top-0 left-0 w-full h-full opacity-0  appearance-none"
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                <option value="">全部球隊</option>
                {teams.map((team, index) => (
                  <option key={index} value={team.name}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>
            <div
              className={`hover:border-black duration-200 relative bg-white border  ${
                selectedCategory === ""
                  ? "border-league-secondary-100"
                  : "border-black "
              }`}
            >
              <div className=" flex  ">
                <div className="px-4 py-[18px] font-medium flex-1 min-w-[115px]">
                  {!selectedCategory && <div>全部類型</div>}
                  {selectedCategory && <div>{selectedCategory}</div>}
                </div>
                <div
                  className={` border-l border-league-secondary-100 flex items-center justify-center p-4 ${
                    selectedCategory === "" ? "bg-white" : "dropdown  "
                  }`}
                >
                  <span className="chevron-down text-[24px] "></span>
                </div>
              </div>
              <select
                className="absolute top-0 left-0 w-full h-full opacity-0  appearance-none"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">全部類型</option>
                <option value="regular">例行賽</option>
                <option value="preseason">熱身賽</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="bg2">
        {games.map((game, index) => (
          <div
            key={index}
            className=" bg-white col-span-12 my-8 border-b border-league-secondary-100 max-sm:my-0"
          >
            <div className="px-8 py-8 max-sm:px-0 max-sm:py-0">
              {/* GameNumber */}
              <div className="flex  relative mb-5  max-sm:flex-wrap-reverse">
                <div className="bg-black text-white rounded-full font-semibold max-sm:absolute max-sm:right-0 max-sm:top-[2.5rem]">
                  <div className="px-4 ">
                    <span>GAME</span>
                    <span className="pl-1">{game.gameNumber}</span>
                  </div>
                </div>
                <div className=" flex justify-center gap-4 items-center absolute right-0 max-sm:relative max-sm:broadcate max-sm:w-full">
                  <span className="text-league-secondary-500 ">TV</span>
                  <span>
                    <img
                      className="h-[15px]"
                      src="data:image/webp;base64,UklGRvYCAABXRUJQVlA4WAoAAAAQAAAAcwAAEwAAQUxQSHMCAAABkFZtexY5TxxkHQQHqYOMgmUUQBUMVdA42CpYULCsgsHB4IDXwcYB7znkSeh3+zMiHLhtG0mee7oulGO6f8C/devjyeYB2FsB0QLhDKsDYPsahKszZWAHIBzc/sckerYFtIkAZFEdsJxiDXA10juiVra9a0Q/gKdVVTf7Q/J6qt5yLGtQ1RHpVCNWrWgzS40hZIgZZsoQDj+kgcLKvhQCnVpCn2xmHhiFfLewZhKnh2II86EZIVyEODzQ5B9QIHuLH9OSSak0C7ISJiWUXg/5OpAlEuKxwEqRUYS6Uzo/H/JNIuqKTFGOuZmXvGVR65B1wLdD7xBioJnkBKglkpmih9McGUeoDwA092Yy7htqupZNRinUHTjJHHVI51RTC7h4BPheB8JEVs4fpX8DYOZDLyQ5sOJ3zOCcu6g+jOjaHxvAmSOr1Go2Rwf6LDpOKbWOY6vnglDgr0WEe0BR3Hx8nM/QiG7H0D44VxnpyDpWayaAF1V1EwHVrdTlAKQY+aSHbDGiWtDAtr23DtZRBXZv+HnzwHfUbKT+6XhtkDoQVXHFQgWBLzv2i6reeYQVOaXrEqeHme9AzCxmFVlU92ecZI69nkhuvAZUgZ4xk1UpegxFx5ocwFD9MN447g0w6eW6d7hS7Ykm6e5QzxxZk+tzLF+VFDLEQkBiIZUVIomkIkSTqiOVRcjIK3DVRXZHP2JduRKiutpsFUfWHkE1jUV1akCphycSm6oLbnH6KD7G2gyNjn2YtuPZCOW0SbKUTU5/H+jjzQJtvDkAPhZbOAPyRALHWAzMHB0pMCtvcRybuTNLexHpK339aPFnbTaE4PC/uwEAVlA4IFwAAAAQBQCdASp0ABQAPp1InUqiIiIjKBQLULATiWcAy9huAJoSAjXqGbzYDtqidap0JlWMAP70TTcZSmtKFJzrwduVtDgDOgs38w+p/6XJguLlw4uSgBTBenMgYAAAAA=="
                    />
                  </span>
                  <span className="text-league-secondary-500">MOD</span>
                  <span>
                    <img className="h-[15px]" src={sportcast} />
                  </span>
                  <span className="text-league-secondary-500">OTT</span>
                  <span>
                    <img src={youtube} className="h-[15px]" />
                  </span>
                </div>
              </div>
              <div className="flex items-center max-sm:block max-sm:px-4 ">
                <div className="flex-[0_0_15%] max-sm:flex max-sm:mb-[1rem]">
                  <span className="text-en-heading-4 max-sm:text-en-heading-6">
                    {new Date(game.gameDate).toLocaleDateString("zh-TW", {
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </span>
                  <span className="text-en-paragraph-sm px-2 max-sm:pt-1.5">
                    ({game.day})
                  </span>
                  <div className="flex text-en-heading-5 text-league-primary-600 max-sm:text-en-heading-6">
                    {game.time}
                  </div>
                </div>
                <div className="flex flex-[0_0_70%] border-x px-1 border-league-secondary-100 max-sm:flex-[0_0_100%] max-sm:border-x-0">
                  <div className=" flex flex-[0_0_30%] justify-end items-center max-sm:flex-wrap max-sm:flex-col-reverse">
                    <div className="relative text-center py-5 px-1">
                      <div className="text-cn-paragraph-xl font-bold max-sm:text-cn-paragraph-sm">
                        {game.awayteam}
                      </div>
                      <div className="">{getTeamWinLose(game.awayteam)}</div>
                    </div>
                    <div className="text-center max-sm:flex-col-reverse max-sm:flex">
                      <img
                        src={getTeamLogo(game.awayteam)}
                        width="96"
                        className="mb-2"
                      />
                      <label className="bg-slate-200  rounded-full text-label-sm  py-1 px-2 ">
                        AWAY
                      </label>
                    </div>
                  </div>
                  <div className="flex-[0_0_40%] text-center flex flex-col font-bold justify-center">
                    <span className="text-en-heading-3 mb-2">{game.time}</span>
                    <span className="text-cn-paragraph-md font-medium">
                      {game.location}
                    </span>
                  </div>
                  <div className="flex flex-[0_0_30%] justify-end items-center max-sm:flex-wrap ">
                    <div className="text-center max-sm:flex-col-reverse max-sm:flex">
                      <img
                        src={getTeamLogo(game.hometeam)}
                        width="96"
                        className="mb-2"
                      />
                      <label className="bg-league-primary text-white rounded-full text-label-sm py-1 px-2 ">
                        HOME
                      </label>
                    </div>
                    <div className="relative text-center py-5 px-1">
                      <div className="text-cn-paragraph-xl font-bold max-sm:text-cn-paragraph-sm">
                        {game.hometeam}
                      </div>
                      <div className="">{getTeamWinLose(game.hometeam)}</div>
                    </div>
                  </div>
                </div>
                <div className="flex-[0_0_15%] flex flex-col text-center max-sm:flex-row max-sm:justify-center">
                  <a
                    href={getTeamTicket(game.hometeam)}
                    target="_blank"
                    className="px-6 py-2 "
                  >
                    <span className="hover:underline underline-offset-4  flex justify-center gap-2">
                      <img src={ticket} className="h-[20px]" />
                      購票連結
                    </span>
                  </a>
                  <a href="#" className="px-6 py-2 ">
                    <span className="hover:underline underline-offset-4  flex justify-center gap-2">
                      <img src={statistics} className="h-[20px]" />
                      數據統計
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Schedule;
