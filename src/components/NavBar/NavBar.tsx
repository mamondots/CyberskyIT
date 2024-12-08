import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="lg:px-20 md:px-10 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl text-[#FE7104] font-semibold">FOOD</h2>
        </div>
        <div>
          <form className="lg:flex hidden items-center gap-2 xl:w-[60vh]">
            <input
              className="px-4 py-2 border border-[#262626]/20 w-full rounded outline-none"
              type="text"
              placeholder="Search Best Food"
            />
            <p className="px-2 py-2 text-[#FE7104] bg-[#FCEEE9] border border-[#FE7104]/40 hover:border-[#FE7104] duration-300 text-xl rounded cursor-pointer">
              <CiSearch />
            </p>
          </form>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="px-2 lg:block hidden py-2 text-[#FE7104] bg-[#FCEEE9] border border-[#FE7104]/30 hover:border-[#FE7104] duration-300 text-xl rounded">
            <IoIosSunny />
          </p>
          <p className="px-2 py-2 lg:block hidden text-[#FE7104] bg-[#FCEEE9] border border-[#FE7104]/30  hover:border-[#FE7104] duration-300 text-xl rounded">
            <FaBarsProgress />
          </p>
          <p className="px-2 py-2 text-[#262626] bg-[#E7E7E7] border border-[#fff]/40  hover:border-[#262626]/40 duration-300 text-xl rounded">
            <AiOutlineMenu />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
