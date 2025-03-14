import React, { useState, useEffect } from "react";
import TableScore from "../constants/TableScore";

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
            "籃板資料表"
          ) : activeTab === "Assists" ? (
            "助攻資料表"
          ) : activeTab === "Steals" ? (
            "抄截資料表"
          ) : activeTab === "Blocks" ? (
            "阻攻資料表"
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TablePlayerSwitcher;
