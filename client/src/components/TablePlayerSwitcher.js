import React, { useState, useEffect } from "react";
import TableScore from "../constants/TableScore";
import TableRebounds from "../constants/TableRebounds";
import TableAssist from "../constants/TableAssist";
import TableSteal from "../constants/TableSteal";
import TableBlock from "../constants/TableBlock";

const TablePlayerSwitcher = () => {
  const [activeTab, setActiveTab] = useState("Score");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-linear w-full h-[56px] relative ">
        <div className="triangle2 absolute right-0"></div>
        <div className="table-bg  h-[56px] mt-[1rem] flex justify-center items-center">
          <div className="flex relative flex-1 justify-center items-center">
            <span
              className="text-cn-paragraph-xl font-bold cursor-pointer"
              onClick={() => handleTabChange("Score")}
            >
              得分
            </span>
            <span
              className={`${
                activeTab === "Score"
                  ? "absolute border-b-4 border-league-primary w-full -bottom-1 underline-expand-active"
                  : "absolute border-b-4 border-league-primary w-full -bottom-1 underline-collapse-active"
              }`}
            ></span>
          </div>
          <div className="flex relative flex-1 justify-center items-center">
            <span
              className="text-cn-paragraph-xl font-bold cursor-pointer"
              onClick={() => handleTabChange("Rebounds")}
            >
              籃板
            </span>
            <span
              className={`${
                activeTab === "Rebounds"
                  ? "absolute border-b-4 border-league-primary w-full -bottom-1 underline-expand-active"
                  : "absolute border-b-4 border-league-primary w-full -bottom-1 underline-collapse-active"
              }`}
            ></span>
          </div>
          <div className="flex relative flex-1 justify-center items-center">
            <span
              className="text-cn-paragraph-xl font-bold cursor-pointer"
              onClick={() => handleTabChange("Assists")}
            >
              助攻
            </span>
            <span
              className={`${
                activeTab === "Assists"
                  ? "absolute border-b-4 border-league-primary w-full -bottom-1 underline-expand-active"
                  : "absolute border-b-4 border-league-primary w-full -bottom-1 underline-collapse-active"
              }`}
            ></span>
          </div>
          <div className="flex relative flex-1 justify-center items-center">
            <span
              className="text-cn-paragraph-xl font-bold justify-center items-center cursor-pointer"
              onClick={() => handleTabChange("Steals")}
            >
              抄截
            </span>
            <span
              className={`${
                activeTab === "Steals"
                  ? "absolute border-b-4 border-league-primary w-full -bottom-1 underline-expand-active"
                  : "absolute border-b-4 border-league-primary w-full -bottom-1 underline-collapse-active"
              }`}
            ></span>
          </div>
          <div className="flex relative flex-1 justify-center items-center">
            <span
              className="text-cn-paragraph-xl font-bold cursor-pointer"
              onClick={() => handleTabChange("Blocks")}
            >
              阻攻
            </span>
            <span
              className={`${
                activeTab === "Blocks"
                  ? "absolute border-b-4 border-league-primary w-full -bottom-1 underline-expand-active"
                  : "absolute border-b-4 border-league-primary w-full -bottom-1 underline-collapse-active"
              }`}
            ></span>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="mx-[1rem] ">
          {activeTab === "Score" ? (
            <TableScore />
          ) : activeTab === "Rebounds" ? (
            <TableRebounds />
          ) : activeTab === "Assists" ? (
            <TableAssist />
          ) : activeTab === "Steals" ? (
            <TableSteal />
          ) : activeTab === "Blocks" ? (
            <TableBlock />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TablePlayerSwitcher;
