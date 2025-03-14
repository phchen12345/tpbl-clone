import React, { useState, useEffect } from "react";

import TableScore from "../constants/TableScore";

const playerSwitcher = () => {
  const [activeTab, setActiveTab] = useState("Score");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-linear w-full h-[56px] relative ">
        <div className="triangle2 absolute right-0"></div>
        <div className="table-bg  h-[56px] mt-[1rem] flex justify-around items-center">
          <div>
            <span
              className="text-cn-paragraph-xl font-bold"
              onClick={() => handleTabChange("standings")}
            >
              得分
            </span>
            <span
              className={`  ${
                activeTab === "Score"
                  ? " border-b-4 border-league-primary w-full  absolute top-[52px] underline-expand-active "
                  : " border-b-4 border-league-primary w-full  absolute top-[52px] underline-collapse-active"
              }`}
            ></span>
          </div>
          <div className="text-cn-paragraph-xl font-bold">籃板</div>
          <div className="text-cn-paragraph-xl font-bold">助攻</div>
          <div className="text-cn-paragraph-xl font-bold">抄截</div>
          <div className="text-cn-paragraph-xl font-bold">阻攻</div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="mx-[1rem] ">
          <TableScore />
        </div>
      </div>
      {activeTab === "Score" ? (
        <TableScore />
      ) : (
        "<TableMatchups matchups={MatchupData} />"
      )}
    </div>
  );
};

export default playerSwitcher;
