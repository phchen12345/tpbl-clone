import React from "react";
import TPBL from "../assets/TPBLlogo.png";
const Footer = () => {
  return (
    <footer className="bg-dark  py-4 px-10">
      <nav className="flex items-center justify-center text-white">
        <p className=" font-medium ">© TPBL LEAGUE 2024 All rights reserved.</p>
        <ul className="text-white flex gap-4 mx-auto font-bold">
          <li className="px-4 py-6">業務合作</li>
          <li className="px-4 py-6">媒體合作</li>
          <li className="px-4 py-6">球迷意見</li>
          <li className="px-4 py-6">隱私權政策</li>
          <li className="px-4 py-6">服務條款</li>
        </ul>
        <div className="flex justify-center items-center gap-5">
          <p>POWERED BY</p>
          <img src={TPBL} />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
