import React from "react";
import TPBL from "../assets/TPBLlogo.png";
const Footer = () => {
  return (
    <footer className="bg-dark object-cover py-4 px-10">
      <nav className="flex items-center justify-center text-white max-sm:flex-wrap">
        <p className=" font-medium max-sm:order-3 max-sm:my-[2rem]">
          © TPBL LEAGUE 2024 All rights reserved.
        </p>
        <ul className="text-white flex gap-4 mx-auto  max-sm:flex-wrap max-sm:gap-0 max-sm:order-1 max-sm:mt-[8rem]">
          <li className="px-4 py-6 max-sm:flex-[0_0_50%] text-center">
            業務合作
          </li>
          <li className="px-4 py-6 max-sm:flex-[0_0_50%] text-center">
            媒體合作
          </li>
          <li className="px-4 py-6 max-sm:flex-[0_0_50%] text-center">
            球迷意見
          </li>
          <li className="px-4 py-6 max-sm:flex-[0_0_50%] text-center">
            隱私權政策
          </li>
          <li className="px-4 py-6 max-sm:flex-[0_0_50%] text-center">
            服務條款
          </li>
        </ul>
        <div className="flex justify-center items-center gap-5 max-sm:order-2 max-sm:mt-[2rem]">
          <p>POWERED BY</p>
          <img src={TPBL} />
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
