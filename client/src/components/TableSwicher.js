import React, { useState, useEffect } from "react";
import { getTeams } from "../services/team.service"; // 從後端獲取數據

import TableStandings from "../constants/TableStandings"; // 戰績表格
import TableMatchups from "../constants/TableMatchups";

const TableSwitcher = () => {
  const [activeTab, setActiveTab] = useState("standings"); // 控制當前顯示的表格
  const [teams, setTeams] = useState([]); // 儲存後端獲取的球隊數據

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams(); // 從後端獲取數據
        setTeams(data);
      } catch (err) {
        console.error("Error fetching teams:", err);
      } finally {
      }
    };
    fetchTeams();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-linear w-full   relative  ">
      {/* 標題切換 */}
      <div className="table-bg w-full h-[56px] flex  font-bold ">
        <div className="triangle2 absolute right-0"></div>
        <div
          className={`flex flex-1 justify-center items-center text-cn-paragraph-xl relative cursor-pointer`}
          onClick={() => handleTabChange("standings")}
        >
          <span>戰績排行</span>
          <span
            className={`  ${
              activeTab === "standings"
                ? " border-b-4 border-league-primary w-full  absolute top-[52px] underline-expand-active "
                : " border-b-4 border-league-primary w-full  absolute top-[52px] underline-collapse-active"
            }`}
          ></span>
        </div>
        <div
          className={`flex flex-1 justify-center items-center text-cn-paragraph-xl relative cursor-pointer`}
          onClick={() => handleTabChange("matchups")}
        >
          <span>對戰戰績</span>
          <span
            className={`  ${
              activeTab === "matchups"
                ? " border-b-4 border-league-primary w-full  absolute top-[52px] underline-expand-active "
                : "border-b-4 border-league-primary w-full  absolute top-[52px] underline-collapse-active"
            }`}
          ></span>
        </div>
      </div>
      <div>
        {/* 根據 activeTab 顯示不同表格 */}
        {activeTab === "standings" ? (
          <TableStandings teams={teams} />
        ) : activeTab === "matchups" ? (
          <TableMatchups teams={teams} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TableSwitcher;
