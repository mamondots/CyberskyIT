import React from "react";
import { GoHome } from "react-icons/go";
import { PiSquaresFour } from "react-icons/pi";
import { TbLocationBroken } from "react-icons/tb";
import { CgPlayButtonR } from "react-icons/cg";
import { CgMenuGridO } from "react-icons/cg";

const SideBar = () => {
  return (
    <div className="fixed lg:block hidden top-80 left-12">
      <div className="flex flex-col gap-4 text-xl">
        <div className="border border-[#FE7104]/40 p-1 text-[#FE7104] rounded cursor-pointer">
          <GoHome />
        </div>
        <div className="hover:border border hover:border-[#FE7104]/40 p-1 text-[#FE7104] rounded cursor-pointer">
          <PiSquaresFour />
        </div>
        <div className="hover:border border hover:border-[#FE7104]/40 p-1 text-[#FE7104] rounded cursor-pointer">
          <TbLocationBroken />
        </div>
        <div className="hover:border border hover:border-[#FE7104]/40 p-1 text-[#FE7104] rounded cursor-pointer">
          <CgPlayButtonR />
        </div>
        <div className="hover:border border hover:border-[#FE7104]/40 p-1 text-[#FE7104] rounded cursor-pointer">
          <CgMenuGridO />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
