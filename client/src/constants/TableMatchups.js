import React from "react";
import TPBL from "../assets/TPBL_logo.png";

const TableMatchups = ({ teams }) => {
  return (
    <div className=" bg-white  pt-2 pb-4 w-full h-full ">
      <div className="mx-[1rem] ">
        <table className=" w-full">
          <thead>
            <tr className="text-cn-paragraph-sm border-b border-league-secondary-200 text-league-secondary-500 ">
              <th className="text-left py-[14px] px-2 max-sm:hidden">排序</th>
              <th className="text-left py-[14px] px-2 ">隊伍</th>
              {teams.map((team, index) => (
                <th>{team.name}</th>
              ))}
            </tr>
          </thead>
          <tbody className="font-bold text-[18px]">
            <tr className="border-b border-league-secondary-200">
              <td className="text-left py-[1rem] px-2 max-sm:hidden">01</td>

              <td className="flex justify-start items-center py-2  ">
                <div className="mr-2">
                  <img
                    src="https://assets.tpbl.basketball/frontend/_nuxt/kings.DsunMN-K.webp"
                    width="48"
                    className="object-contain "
                  />
                </div>
                <span className="text-cn-paragraph-xl max-sm:hidden">
                  新北國王
                </span>
              </td>

              <td className=" px-2  text-center ">
                <img className="flex " src={TPBL}></img>
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-0
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                4-0
              </td>
            </tr>
            <tr className="border-b border-league-secondary-200">
              <td className="text-left py-[1rem] px-2 max-sm:hidden">02</td>

              <td className="flex justify-start items-center py-2  ">
                <div className="mr-2">
                  <img
                    src="https://assets.tpbl.basketball/frontend/_nuxt/dreamers.8uP5AliT.webp"
                    width="48"
                    className="object-contain "
                  />
                </div>
                <span className="text-cn-paragraph-xl max-sm:hidden">
                  福爾摩沙夢想家
                </span>
              </td>

              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-2
              </td>
              <td className=" py-2 text-center">
                <img className="flex px-2" src={TPBL}></img>
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-2
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-0
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-1
              </td>
            </tr>
            <tr className="border-b border-league-secondary-200">
              <td className="text-left py-[1rem] px-2 max-sm:hidden">03</td>

              <td className="flex justify-start items-center py-2  ">
                <div className="mr-2">
                  <img
                    src="https://assets.tpbl.basketball/frontend/_nuxt/aquas.CB-Rq9NB.webp"
                    width="48"
                    className="object-contain "
                  />
                </div>
                <span className="text-cn-paragraph-xl max-sm:hidden">
                  高雄全家海神
                </span>
              </td>

              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                0-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-2
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                <img className="flex " src={TPBL}></img>
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                4-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                4-0
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-1
              </td>
            </tr>
            <tr className="border-b border-league-secondary-200">
              <td className="text-left py-[1rem] px-2 max-sm:hidden">04</td>

              <td className="flex justify-start items-center py-2  ">
                <div className="mr-2">
                  <img
                    src="https://assets.tpbl.basketball/frontend/_nuxt/mars.BbDWfkG6.webp"
                    width="48"
                    className="object-contain "
                  />
                </div>
                <span className="text-cn-paragraph-xl max-sm:hidden">
                  臺北台新戰神
                </span>
              </td>

              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-4
              </td>
              <td className=" py-2 text-center max-sm:text-en-paragraph-sm">
                <img className="flex px-2" src={TPBL}></img>
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                4-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-2
              </td>
            </tr>
            <tr className="border-b border-league-secondary-200">
              <td className="text-left py-[1rem] px-2 max-sm:hidden">05</td>

              <td className="flex justify-start items-center py-2  ">
                <div className="mr-2">
                  <img
                    src="https://assets.tpbl.basketball/frontend/_nuxt/dea.BEfNfG39.webp"
                    width="48"
                    className="object-contain "
                  />
                </div>
                <span className="text-cn-paragraph-xl max-sm:hidden">
                  新北中信特攻
                </span>
              </td>

              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-2
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                0-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-4
              </td>
              <td className=" py-2 text-center max-sm:text-en-paragraph-sm">
                <img className="flex px-2" src={TPBL}></img>
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-1
              </td>
            </tr>
            <tr className="border-b border-league-secondary-200">
              <td className="text-left py-[1rem] px-2 max-sm:hidden">06</td>

              <td className="flex justify-start items-center py-2  ">
                <div className="mr-2">
                  <img
                    src="https://assets.tpbl.basketball/frontend/_nuxt/leopards.BGzlSG8M.webp"
                    width="48"
                    className="object-contain "
                  />
                </div>
                <span className="text-cn-paragraph-xl max-sm:hidden">
                  桃園台啤永豐雲豹
                </span>
              </td>

              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                0-4
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-2
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                <img className="flex px-2" src={TPBL}></img>
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                3-2
              </td>
            </tr>
            <tr className="border-b border-league-secondary-200 ">
              <td className="text-left py-[1rem] px-2 max-sm:hidden">07</td>

              <td className="flex justify-start items-center py-2  ">
                <div className="mr-2">
                  <img
                    src="https://assets.tpbl.basketball/frontend/_nuxt/lioneers.DTfkuEJZ.webp"
                    width="48"
                    className="object-contain "
                  />
                </div>
                <span className="text-cn-paragraph-xl max-sm:hidden">
                  新竹御嵿攻城獅
                </span>
              </td>

              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                0-4
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-1
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-2
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                1-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                2-3
              </td>
              <td className=" px-2 text-center max-sm:text-en-paragraph-sm">
                <img className="flex " src={TPBL}></img>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableMatchups;
