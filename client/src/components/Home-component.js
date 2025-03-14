import React from "react";
import { useState } from "react";
import TableSwitcher from "./TableSwicher";
import TablePlayerSwitcher from "./TablePlayerSwitcher";
import bottomImage from "../assets/底部圖片.png";
import Swipers from "./Swipers";
import Game from "./Game";
import tpbltop from "../assets/tpbltop.webp";

const HomeComponent = () => {
  return (
    <main className=" ">
      <section
        style={{ backgroundImage: `url(${tpbltop})` }}
        id="bg1"
        className="  relative    pt-[112px]"
      >
        <div className="flex justify-center w-full h-full  ">
          <Swipers />
        </div>
      </section>
      <section className=" bg2  pt-12 max-md:px-4 max-xl:px-10 xl:max-width: ">
        <div className="col-span-8 min-h-screen flex flex-col relative max-md:col-span-full">
          <div className="w-full flex flex-col relative  mb-10">
            <div className="mb-5 flex relative ">
              <h2 className="text-en-heading-4 max-sm:max-w-[50%] max-sm:text-en-heading-6">
                2024-25 Regular Season Standings
              </h2>
              <h3 className="text-cn-paragraph-xl font-bold absolute right-0 bottom-0 max-sm:text-cn-paragraph-md max-sm:pr-2 ml-auto">
                例行賽戰績
              </h3>
            </div>
            <div>
              <TableSwitcher />
            </div>
          </div>
          <div className="w-full flex flex-col relative  mb-10">
            <div className="mb-5 flex relative">
              <h2 className="text-en-heading-4 ">Latest News</h2>
              <h3 className="text-cn-paragraph-xl font-bold absolute right-0">
                最新消息
              </h3>
            </div>
            <div className="bg-white p-6">
              <div className="flex mb-6">
                <div className="">
                  <img
                    className=" aspect-[1/1] object-cover"
                    width="265"
                    src="https://assets.tpbl.basketball/production/posts/89/osT8SGQSlhRFnQhcdwqKudDWRixomm4Ktj3QNk39.jpg?20250303180002"
                  />
                </div>
                <div className="  pl-6 py-4 relative w-full flex flex-col justify-between">
                  <div className="text-league-secondary-900 font-bold text-cn-heading-6 ">
                    03/05 - 03/09 傷兵報告
                  </div>
                  <div className=" flex justify-between mt-auto border-league-secondary-200 border-t pt-4">
                    <span className="text-en-paragraph-md">2025-03-03</span>
                    <lable className="text-league-primary-900 font-bold text-cn-paragraph-md bg-league-secondary-50 px-2 py-1">
                      傷兵報告 | 每週一固定更新
                    </lable>
                  </div>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="">
                  <img
                    className=" aspect-[1/1] object-cover"
                    width="265"
                    src="https://assets.tpbl.basketball/production/posts/88/hWaNSNVNwym7yd76mPHLfveOoosafUGjzFfEUVJ7.jpg?20250225111616"
                  />
                </div>
                <div className="  pl-6 py-4 relative w-full flex flex-col justify-between">
                  <div className="text-league-secondary-900 font-bold text-cn-heading-6 ">
                    《堅持的眼睛：謝謝自己的永不放棄-李愷諺雲霄飛車般的籃球旅程ing》
                  </div>
                  <div className=" flex justify-between mt-auto border-league-secondary-200 border-t pt-4">
                    <span className="text-en-paragraph-md">2025-02-25</span>
                    <lable className="text-league-primary-900 font-bold text-cn-paragraph-md bg-league-secondary-50 px-2 py-1">
                      Beyond Basketball｜球員故事
                    </lable>
                  </div>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="">
                  <img
                    className=" aspect-[1/1] object-cover"
                    width="265"
                    src="https://assets.tpbl.basketball/production/posts/89/osT8SGQSlhRFnQhcdwqKudDWRixomm4Ktj3QNk39.jpg?20250303180002"
                  />
                </div>
                <div className="  pl-6 py-4 relative w-full flex flex-col justify-between">
                  <div className="text-league-secondary-900 font-bold text-cn-heading-6 ">
                    02-26 - 03/02 傷兵報告
                  </div>
                  <div className=" flex justify-between mt-auto border-league-secondary-200 border-t pt-4">
                    <span className="text-en-paragraph-md">2025-02-25</span>
                    <lable className="text-league-primary-900 font-bold text-cn-paragraph-md bg-league-secondary-50 px-2 py-1">
                      傷兵報告｜每週一固定更新
                    </lable>
                  </div>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="">
                  <img
                    className=" aspect-[1/1] object-cover"
                    width="265"
                    src="https://assets.tpbl.basketball/production/posts/86/qhbxhjbrXhwsJnz9cmQOs8F9gSUYnEHqF9YG0XKY.jpg?20250221155105"
                  />
                </div>
                <div className="  pl-6 py-4 relative w-full flex flex-col justify-between">
                  <div className="text-league-secondary-900 font-bold text-cn-heading-6 ">
                    𝗧𝗣𝗕𝗟 𝗧𝗢𝗚𝗘𝗧𝗛𝗘𝗥 創作者夥伴計劃 🧑‍🎨
                  </div>
                  <div className=" flex justify-between mt-auto border-league-secondary-200 border-t pt-4">
                    <span className="text-en-paragraph-md">2025-02-21</span>
                    <lable className="text-league-primary-900 font-bold text-cn-paragraph-md bg-league-secondary-50 px-2 py-1">
                      TPBL公告
                    </lable>
                  </div>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="">
                  <img
                    className=" aspect-[1/1] object-cover"
                    width="265"
                    src="https://assets.tpbl.basketball/production/posts/85/2yHqCUBhMiqkFZTSOFtKbtk3fLEqUCcZ5YHdbUOV.jpg?20250219134503"
                  />
                </div>
                <div className="  pl-6 py-4 relative w-full flex flex-col justify-between">
                  <div className="text-league-secondary-900 font-bold text-cn-heading-6 ">
                    台灣職業籃球大聯盟與WSC Sports簽署三年合作夥伴關係
                  </div>
                  <div className=" flex justify-between mt-auto border-league-secondary-200 border-t pt-4">
                    <span className="text-en-paragraph-md">2025-02-19</span>
                    <lable className="text-league-primary-900 font-bold text-cn-paragraph-md bg-league-secondary-50 px-2 py-1">
                      聯盟快訊
                    </lable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4      max-md:col-span-full ">
          <div className="max-md:grid max-md:grid-cols-2 gap-4 max-sm:block">
            <Game />
            <div className="mb-10 flex-1">
              <div>
                <div className=" flex justify-between">
                  <h2 className="text-en-heading-4 ">Leaders</h2>
                  <h3 className="text-cn-paragraph-xl font-bold">排行榜</h3>
                </div>
              </div>
              <TablePlayerSwitcher />
              <TablePlayerSwitcher />
            </div>
          </div>
        </div>
      </section>
      <section className="bg3  ">
        <div className="mb-10">
          <div className="flex justify-between mb-5">
            <span className="text-en-heading-4">Pickup Video</span>
            <span className="text-cn-paragraph-xl ">精選圖片</span>
          </div>
          <div className="flex gap-4 ">
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=9GXPA94QufM"
                target="_blank"
              >
                <img
                  className="aspect-[9/16] object-cover w-full"
                  src="https://i.ytimg.com/vi/9GXPA94QufM/sddefault.jpg"
                />
              </a>
              <div className="bg4 absolute bottom-0 text-white font-bold  pt-12 pb-6 px-4">
                <p className="line-clamp-2">
                  👀👉｜雷蒙恩持續展現狀元身價，先是一個禁區強勢ANDONE，防守端再送上麻辣火鍋🌶️雷粉們快來報到🫡
                </p>
              </div>
            </div>

            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=vZ5SrUACdOY"
                target="_blank"
              >
                <img
                  className="aspect-[9/16] object-cover w-full"
                  src="https://i.ytimg.com/vi/vZ5SrUACdOY/sddefault.jpg"
                />
              </a>
              <div className="bg4 absolute bottom-0 text-white font-bold  pt-12 pb-6 px-4">
                <p className="line-clamp-2">
                  👀👉｜能量小子蘇文儒，送上來自南部的能量火鍋🌶️
                </p>
              </div>
            </div>
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=i1EQVxt1eBM"
                target="_blank"
              >
                <img
                  className="aspect-[9/16] object-cover w-full"
                  src="https://i.ytimg.com/vi/i1EQVxt1eBM/sddefault.jpg"
                />
              </a>
              <div className="bg4 absolute bottom-0 text-white font-bold  pt-12 pb-6 px-4">
                <p className="line-clamp-2">
                  👀👉｜麥卡倫的大號三分球for3333，嗨翻和平籃球館🔥
                </p>
              </div>
            </div>
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=MTI4RNztGb8"
                target="_blank"
              >
                <img
                  className="aspect-[9/16] object-cover w-full"
                  src="https://i.ytimg.com/vi/MTI4RNztGb8/sddefault.jpg"
                />
              </a>
              <div className="bg4 absolute bottom-0 text-white font-bold pt-12 pb-6 px-4">
                <p className="line-clamp-2">
                  👀👉｜渾身是勁的雷蒙恩，兩次關鍵的切入嗨翻和平籃球館🔥
                </p>
              </div>
            </div>
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=BL8sCrI12zA"
                target="_blank"
              >
                <img
                  className="aspect-[9/16] object-cover w-full"
                  src="https://i.ytimg.com/vi/BL8sCrI12zA/sddefault.jpg"
                />
              </a>
              <div className="bg4 absolute bottom-0 text-white font-bold  pt-12 pb-6 px-4">
                <p className="line-clamp-2">
                  👀👉｜ 「喵」準籃筐 特攻當家射手彈無虛發🤙🏻
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex gap-3">
          <div className="bg-white flex-1">
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=lA5iDl_8kdw "
                target="_blank"
              >
                <div className=" ">
                  <img
                    className=" aspect-[16/9] w-full object-cover"
                    src="https://i.ytimg.com/vi/lA5iDl_8kdw/sddefault.jpg"
                  />
                </div>
              </a>
              <div className="absolute bottom-4 left-4">
                <div className="bg5 rounded-full w-[56px] h-[56px] flex items-center justify-center">
                  <div>
                    <svg
                      id="main"
                      width="36"
                      height=""
                      viewBox="-184.32 -184.32 880.64 880.64"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      transform="matrix(1, 0, 0, 1, 0, 0)rotate(90)"
                    >
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>triangle-filled</title>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="drop"
                            fill="#000000"
                            transform="translate(32.000000, 42.666667)"
                          >
                            {" "}
                            <path
                              d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                              id="Combined-Shape"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="line-clamp-2 border-b pb-4 text-cn-heading-6">
                <h4 className="line-clamp-2">
                  【𝙏𝙊𝙋 𝟱 𝙤𝙛 𝙩𝙝𝙚 𝙬𝙚𝙚𝙠 】𝙒𝙚𝙚𝙠𝟭𝟱 五大好球｜TPBL 2024-25 例行賽
                </h4>
              </div>
              <div className="pt-4 text-en-paragraph-md">
                <span>2025-03-04</span>
              </div>
            </div>
          </div>
          <div className="bg-white flex-1">
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=lA5iDl_8kdw "
                target="_blank"
              >
                <div className="relative ">
                  <img
                    className="object-cover w-full aspect-[16/9]"
                    src="https://i.ytimg.com/vi/xFPB6R1iuZI/sddefault.jpg"
                  />
                </div>
              </a>
              <div className="absolute bottom-4 left-4">
                <div className="bg5 rounded-full w-[56px] h-[56px] flex items-center justify-center">
                  <div>
                    <svg
                      id="main"
                      width="36"
                      height=""
                      viewBox="-184.32 -184.32 880.64 880.64"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      transform="matrix(1, 0, 0, 1, 0, 0)rotate(90)"
                    >
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>triangle-filled</title>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="drop"
                            fill="#000000"
                            transform="translate(32.000000, 42.666667)"
                          >
                            {" "}
                            <path
                              d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                              id="Combined-Shape"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="line-clamp-2 border-b pb-4 text-cn-heading-6">
                🗣️𝗣𝗟𝗔𝗬𝗘𝗥 𝗢𝗙 𝗧𝗛𝗘 𝗪𝗘𝗘𝗞｜⚡️飛馳 Daron Russell
              </h4>
              <div className="pt-4 text-en-paragraph-md">
                <span>2025-03-04</span>
              </div>
            </div>
          </div>
          <div className="bg-white flex-1">
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=lA5iDl_8kdw "
                target="_blank"
              >
                <div className="relative ">
                  <img
                    className="object-cover w-full aspect-[16/9]"
                    src="https://i.ytimg.com/vi/Kkk8XQeqy14/sddefault.jpg"
                  />
                </div>
              </a>
              <div className="absolute bottom-4 left-4">
                <div className="bg5 rounded-full w-[56px] h-[56px] flex items-center justify-center">
                  <div>
                    <svg
                      id="main"
                      width="36"
                      height=""
                      viewBox="-184.32 -184.32 880.64 880.64"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      transform="matrix(1, 0, 0, 1, 0, 0)rotate(90)"
                    >
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>triangle-filled</title>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="drop"
                            fill="#000000"
                            transform="translate(32.000000, 42.666667)"
                          >
                            {" "}
                            <path
                              d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                              id="Combined-Shape"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className=" border-b pb-4 text-cn-heading-6">
                <h4 className="line-clamp-2">
                  【𝗙𝗨𝗟𝗟𝗚𝗔𝗠𝗘 𝗛𝗜𝗚𝗛𝗟𝗜𝗚𝗛𝗧𝗦】高雄全家海神 vs. 臺北台新戰神｜TPBL
                  2024-25 例行賽 G72｜MAR. 02
                </h4>
              </div>
              <div className="pt-4 text-en-paragraph-md">
                <span>2025-03-02</span>
              </div>
            </div>
          </div>
          <div className="bg-white flex-1">
            <div className="relative">
              <a
                href="https://www.youtube.com/watch?v=lA5iDl_8kdw "
                target="_blank"
              >
                <div className="relative ">
                  <img
                    className="object-cover w-full aspect-[16/9]"
                    src="https://i.ytimg.com/vi/ef_ZCdlr60U/sddefault.jpg"
                  />
                </div>
              </a>
              <div className="absolute bottom-4 left-4">
                <div className="bg5 rounded-full w-[56px] h-[56px] flex items-center justify-center">
                  <div>
                    <svg
                      id="main"
                      width="36"
                      height=""
                      viewBox="-184.32 -184.32 880.64 880.64"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      transform="matrix(1, 0, 0, 1, 0, 0)rotate(90)"
                    >
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>triangle-filled</title>{" "}
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          {" "}
                          <g
                            id="drop"
                            fill="#000000"
                            transform="translate(32.000000, 42.666667)"
                          >
                            {" "}
                            <path
                              d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
                              id="Combined-Shape"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className=" border-b pb-4 text-cn-heading-6">
                <h6 className="line-clamp-2">
                  🛡️小雷蛻變成雷鬼
                  追加外線技能包更上層樓｜單場表現最佳球員｜TPBL 2024-25 例行賽
                  𝗚𝟳𝟮 ◼ 高雄全家海神 vs. 臺北台新戰神｜【𝗔𝗟𝗟 𝗘𝗬𝗘𝗦 𝗢𝗡 𝗛𝗜𝗠】
                </h6>
              </div>
              <div className="pt-4 text-en-paragraph-md">
                <span>2025-03-02</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-[120px]">
        <div>
          <img src={bottomImage} className="object-cover w-full" />
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
