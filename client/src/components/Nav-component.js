import React from "react";
import { Link } from "react-router-dom";
import "rsuite/styles/index.less";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // 漢堡選單 & 關閉按鈕
import { getTeams } from "../services/team.service";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import TPBL from "../assets/TPBLlogo.png";

const NavComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const [teams, setTeams] = useState([]);

  const controlSetDropdownOpen = (tab) => {
    setDropdownOpen(tab);
  };

  const controlSetSubDropdownOpen = (tab) => {
    setSubDropdownOpen(tab);
  };

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchTeams();
  }, []);

  return (
    <header className="  fixed w-full top-0 left-0 z-50">
      <nav className="relative    mx-20  flex justify-between items-center bg-black max-xl:mx-5 ">
        <div className=" relative right-5 w-5 h-20 bg-black "></div>
        <div className="max-xl:absolute max-xl:left-0 mr-10">
          <Link to="/">
            <img src={TPBL} alt="Logo" />
          </Link>
        </div>

        <ul className=" hover:cursor-pointer  flex h-20  relative   text-white  bg-black max-xl:hidden">
          <li
            onMouseEnter={() => controlSetDropdownOpen("test")}
            onMouseLeave={() => setDropdownOpen(false)}
            className=" h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden flex">
              <div>
                <span
                  className={`block transition-transform duration-300 ${
                    dropdownOpen === "test"
                      ? "-translate-y-6"
                      : "translate-y-0 "
                  }`}
                >
                  關於聯盟
                </span>
                <span
                  className={`block transition-transform duration-300   ${
                    dropdownOpen === "test"
                      ? "-translate-y-6 delay-300"
                      : "translate-y-0"
                  }`}
                >
                  關於聯盟
                </span>
              </div>

              <span className=" pl-2">-</span>
            </div>

            <div
              className={`  top-[60px] absolute -left-3  w-48 bg-black text-white 
                          ${dropdownOpen === "test" ? "block" : "hidden"}`}
            >
              <div className="mt-5 relative">
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-league-secondary duration-300"
                >
                  關於聯盟
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:text-league-secondary duration-300"
                >
                  聯盟團隊
                </a>
                <a
                  href="#"
                  onMouseEnter={() => controlSetSubDropdownOpen("sub")}
                  onMouseLeave={() => setSubDropdownOpen(false)}
                  className="relative flex items-center px-4 py-2 hover:text-league-secondary duration-300"
                >
                  <span>聯盟賽務</span>
                  <div className="chevron-right absolute right-2"></div>
                </a>

                <div
                  onMouseEnter={() => controlSetSubDropdownOpen("sub")}
                  onMouseLeave={() => setSubDropdownOpen(false)}
                  className={`bg-black  absolute left-full top-[80px] w-48 px-4 py-4  flex items-center ${
                    subDropdownOpen === "sub" ? "block" : "hidden"
                  } `}
                >
                  <a href="#" className="flex flex-col ">
                    <span className="hover:text-league-secondary">
                      賽務規章
                    </span>
                    <span className="text-en-paragraph-sm ">
                      (2025/02/25修訂版)
                    </span>
                  </a>
                </div>

                <a
                  onMouseEnter={() => controlSetSubDropdownOpen("sub1")}
                  onMouseLeave={() => setSubDropdownOpen(false)}
                  href="#"
                  className="flex items-center px-4 py-2 hover:text-league-secondary relative"
                >
                  選秀
                  <div className="chevron-right absolute right-2"></div>
                </a>
                <div
                  onMouseEnter={() => controlSetSubDropdownOpen("sub1")}
                  onMouseLeave={() => setSubDropdownOpen(false)}
                  className={`bg-black  absolute left-full top-[120px] w-48 px-4 py-4  flex items-center ${
                    subDropdownOpen === "sub1" ? "block" : "hidden"
                  } `}
                >
                  <a href="#" className="flex flex-col ">
                    <div className="flex flex-col ">
                      <span className="hover:text-league-secondary py-2">
                        選秀辦法
                      </span>
                      <span className="hover:text-league-secondary py-2">
                        選秀名單
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => controlSetDropdownOpen("test1")}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden flex">
              <div>
                <span
                  className={`block transition-transform duration-300 ${
                    dropdownOpen === "test1"
                      ? "-translate-y-6"
                      : "translate-y-0 "
                  }`}
                >
                  球隊
                </span>
                <span
                  className={`block transition-transform duration-300   ${
                    dropdownOpen === "test1"
                      ? "-translate-y-6 delay-300"
                      : "translate-y-0"
                  }`}
                >
                  球隊
                </span>
              </div>
              <span className=" pl-2">-</span>
            </div>

            <div
              className={`w-60 top-[60px] absolute -left-3  bg-black text-white 
                          ${dropdownOpen === "test1" ? "block" : "hidden"}`}
            >
              <div className="mt-5 ">
                {teams.map((team, index) => (
                  <div className="flex px-4 py-3">
                    <div>
                      <img src={team.teamlogo} width="32" height={32} />
                    </div>
                    <a
                      key={index}
                      href="#"
                      className="block px-1  hover:text-league-secondary"
                    >
                      {team.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => controlSetDropdownOpen("test2")}
            onMouseLeave={() => setDropdownOpen(false)}
            className=" h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden">
              <span
                className={`block transition-transform duration-300 ${
                  dropdownOpen === "test2" ? "-translate-y-6" : "translate-y-0 "
                }`}
              >
                <Link to="/game">賽程</Link>
              </span>
              <span
                className={`block transition-transform duration-300   ${
                  dropdownOpen === "test2"
                    ? "-translate-y-6 delay-300"
                    : "translate-y-0"
                }`}
              >
                <Link to="/game">賽程</Link>
              </span>
            </div>
          </li>
          <li
            onMouseEnter={() => controlSetDropdownOpen("test3")}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden flex">
              <div>
                <span
                  className={`block transition-transform duration-300 ${
                    dropdownOpen === "test3"
                      ? "-translate-y-6"
                      : "translate-y-0 "
                  }`}
                >
                  比賽數據
                </span>
                <span
                  className={`block transition-transform duration-300   ${
                    dropdownOpen === "test3"
                      ? "-translate-y-6 delay-300"
                      : "translate-y-0"
                  }`}
                >
                  比賽數據
                </span>
              </div>
              <span className=" pl-2">-</span>
            </div>

            <div
              className={`w-48 top-[60px] absolute -left-3  bg-black text-white 
                          ${dropdownOpen === "test3" ? "block" : "hidden"}`}
            >
              <div className=" ">
                <div className=" px-4 py-3">
                  <a
                    href="#"
                    className="block px-1 py-3  hover:text-league-secondary"
                  >
                    球隊數據
                  </a>
                  <a
                    href="#"
                    className="block px-1 py-3 hover:text-league-secondary"
                  >
                    球員數據
                  </a>
                  <a
                    href="#"
                    className="block px-1 py-3 hover:text-league-secondary"
                  >
                    數據排行
                  </a>
                  <a
                    href="#"
                    className="block px-1 py-3 hover:text-league-secondary"
                  >
                    特殊表現
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => controlSetDropdownOpen("test4")}
            onMouseLeave={() => setDropdownOpen(false)}
            className=" h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden">
              <span
                className={`block transition-transform duration-300 ${
                  dropdownOpen === "test4" ? "-translate-y-6" : "translate-y-0 "
                }`}
              >
                最新消息
              </span>
              <span
                className={`block transition-transform duration-300   ${
                  dropdownOpen === "test4"
                    ? "-translate-y-6 delay-300"
                    : "translate-y-0"
                }`}
              >
                最新消息
              </span>
            </div>
          </li>
          <li
            onMouseEnter={() => controlSetDropdownOpen("test5")}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden flex">
              <div>
                <span
                  className={`block transition-transform duration-300 ${
                    dropdownOpen === "test5"
                      ? "-translate-y-6"
                      : "translate-y-0 "
                  }`}
                >
                  獎項
                </span>
                <span
                  className={`block transition-transform duration-300   ${
                    dropdownOpen === "test5"
                      ? "-translate-y-6 delay-300"
                      : "translate-y-0"
                  }`}
                >
                  獎項
                </span>
              </div>
              <span className=" pl-2">-</span>
            </div>

            <div
              className={`w-60 top-[60px] absolute -left-3  bg-black text-white 
                          ${dropdownOpen === "test5" ? "block" : "hidden"}`}
            >
              <div className=" ">
                <div className=" px-4 py-3">
                  <a
                    href="#"
                    className="block px-1 py-3 hover:text-league-secondary"
                  >
                    歷屆獎項
                  </a>
                  <a
                    href="#"
                    className="block px-1 py-3 hover:text-league-secondary"
                  >
                    票選活動
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => controlSetDropdownOpen("test6")}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden flex">
              <div>
                <span
                  className={`block transition-transform duration-300 ${
                    dropdownOpen === "test6"
                      ? "-translate-y-6"
                      : "translate-y-0 "
                  }`}
                >
                  購票
                </span>
                <span
                  className={`block transition-transform duration-300   ${
                    dropdownOpen === "test6"
                      ? "-translate-y-6 delay-300"
                      : "translate-y-0"
                  }`}
                >
                  購票
                </span>
              </div>

              <span className=" pl-2">-</span>
            </div>

            <div
              className={`w-60 top-[60px] absolute -left-3  bg-black text-white 
                          ${dropdownOpen === "test6" ? "block" : "hidden"}`}
            >
              <div className="mt-5 ">
                {teams.map((team, index) => (
                  <div className="flex px-4 py-3">
                    <div>
                      <img src={team.teamlogo} width="32" height={32} />
                    </div>
                    <a
                      key={index}
                      href={team.ticketWeb}
                      target="_blank"
                      className="block px-1  hover:text-league-secondary"
                    >
                      {team.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </li>
        </ul>

        <ul className=" flex  text-white    bg-black max-xl:hidden">
          <li
            onMouseEnter={() => controlSetDropdownOpen("test7")}
            onMouseLeave={() => setDropdownOpen(false)}
            className=" h-full flex items-center hover:text-league-secondary "
          >
            <div className="relative h-6  overflow-hidden flex cursor-pointer">
              <div>
                <span
                  className={`block transition-transform duration-300 ${
                    dropdownOpen === "test7"
                      ? "-translate-y-6"
                      : "translate-y-0 "
                  }`}
                >
                  訂閱電子報
                </span>
                <span
                  className={`block transition-transform duration-300   ${
                    dropdownOpen === "test7"
                      ? "-translate-y-6 delay-300"
                      : "translate-y-0"
                  }`}
                >
                  訂閱電子報
                </span>
              </div>
            </div>
          </li>
          <li className=" flex  navHover space-x-4">
            <a className="masked-linedin hover:text-league-secondary duration-200"></a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={youtube} />
            </a>
          </li>
        </ul>

        <div className=" relative left-6  w-[24px]   ">
          <div className="h-[60px] bg-black "></div>
          <div className="triangle"></div>
        </div>
      </nav>
    </header>
  );
};

export default NavComponent;
