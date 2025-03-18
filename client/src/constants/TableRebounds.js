import React, { useEffect, useState } from "react";
import { PlayerScoreData, teamColorMap } from "./player";

const TableScore = () => {
  const [players, setPlayers] = useState([]);

  // 排序 PlayerScoreData 按 average 從大到小

  useEffect(() => {
    const sortedPlayers = [...PlayerScoreData]
      .sort((a, b) => {
        const reboundA = parseFloat(a.rebound); // 將字符串轉為數字
        const reboundB = parseFloat(b.rebound); // 將字符串轉為數字
        return reboundB - reboundA; // 從大到小排序
      })
      .map((player, index) => ({
        ...player,
        rank: String(index + 1).padStart(2, "0"),
      }));
    setPlayers(sortedPlayers);
  }, []);

  return (
    <div>
      <table className="  w-full ">
        <thead>
          <tr className="border-b text-label-sm text-league-secondary-500">
            <th className="text-left py-[14px]">排序</th>
            <th className="text-left">球員</th>
            <th className="">隊伍</th>
            <th className="text-right">場均</th>
          </tr>
        </thead>
        <tbody className="">
          {players.map((p, index) => {
            return (
              <tr key={index} className="text-en-paragraph-xl border-b ">
                <td className="text-left py-[1rem]">{p.rank}</td>
                <td className="text-left">
                  <div>
                    <div className="flex gap-1 items-center py-2 px-2">
                      <div
                        className={`rounded-full overflow-hidden ${
                          teamColorMap[p.team]
                        }`}
                      >
                        <img width="48" height="48" src={p.photo} />
                      </div>
                      <div className="mx-[1rem]">
                        <h6 className="text-[16px] font-[800]">
                          {p.player.name}
                        </h6>
                        <h6 className="text-[12px] text-league-secondary-300 font-[600]">
                          {p.player.backnumber}
                        </h6>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-2 ">
                  <div className="flex justify-center items-center">
                    <img src={p.team} width="32" />
                  </div>
                </td>
                <td className="text-right">{p.rebound}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableScore;
