import React from "react";

const TableStandings = ({ teams }) => {
  return (
    <div className=" bg-white  pt-2 pb-4 w-full h-full ">
      <div className="mx-[1rem] ">
        <table className=" w-full">
          <thead>
            <tr className="text-cn-paragraph-sm border-b border-league-secondary-200 text-league-secondary-500 ">
              <th className="text-left py-[14px] px-2">排序</th>
              <th className="text-left py-[14px] px-2 ">隊伍</th>
              <th className="text-right py-[14px] px-2 max-sm:hidden">
                出場賽事
              </th>
              <th className="text-right py-[14px] px-2">勝W</th>
              <th className="text-right py-[14px] px-2">敗L</th>
              <th className="text-right py-[14px] px-2 max-sm:hidden">
                勝率PCT
              </th>
              <th className="text-right py-[14px] px-2">勝差GB</th>
              <th className="text-right py-[14px] px-2 max-sm:hidden">
                連續紀錄
              </th>
            </tr>
          </thead>
          <tbody className="font-bold text-[18px]">
            {teams.map((team, index) => (
              <tr key={index} className="border-b border-league-secondary-200">
                <td className="text-left py-[1rem] px-2">{team.rank}</td>

                <td className="flex justify-start items-center py-2  ">
                  <div className="mr-2">
                    <img
                      src={team.teamlogo}
                      width="48"
                      className="object-contain "
                      alt={`${team.name} Logo`}
                    />
                  </div>
                  <span className="text-cn-paragraph-xl">{team.name}</span>
                </td>

                <td className="text-right py-2 px-2">{team.playedGame}</td>
                <td className="text-right px-2">{team.wins}</td>
                <td className="text-right px-2">{team.loses}</td>
                <td className="text-right px-2 max-sm:hidden">
                  {(team.winRate * 100).toFixed(1)}%
                </td>
                <td className="text-right px-2 max-sm:hidden">
                  {team.gamesBehind}
                </td>
                <td className="text-right px-2 max-sm:hidden">{team.streak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableStandings;
