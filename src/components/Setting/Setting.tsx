/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Setting = () => {
  const [fontSize, setFontSize] = useState(19);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const handleDrag = (e: MouseEvent) => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const newWidth = Math.min(Math.max(0, e.clientX - rect.left), rect.width);

    const newFontSize = Math.round((newWidth / rect.width) * 50);
    setFontSize(newFontSize);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDrag(e as unknown as MouseEvent);
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleDrag);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => handleMouseUp();
  }, []);

  return (
    <div className="bg-white rounded px-2 py-4">
      <div className="border border-gray-300 rounded p-4">
        <div className="text-base text-orange-500 flex items-center justify-between">
          <p className="flex items-center gap-2 font-semibold">
            <span className="border border-orange-500 rounded">
              <AiTwotoneSetting />
            </span>
            <span>Setting</span>
          </p>
          <p>
            <IoIosArrowDown />
          </p>
        </div>

        <div className="py-4 text-base">
          <div className="flex font-semibold justify-between items-center">
            <p>Paragraph font size</p>
            <p className="text-orange-500">{fontSize}</p>
          </div>

          <div className="mt-4 relative" ref={progressBarRef}>
            <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>
            <div
              className="h-[4px] bg-orange-500 rounded-full absolute top-[-1px]"
              style={{ width: `${(fontSize / 50) * 100}%` }}
            >
              <div
                className="bg-orange-500 w-3 h-3 rounded-full absolute top-[-3px] cursor-pointer"
                style={{ left: `calc(${(fontSize / 50) * 100}% - 6px)` }} // Adjust for handle width
                onMouseDown={handleMouseDown}
                role="slider"
                aria-valuenow={fontSize}
                aria-valuemin={0}
                aria-valuemax={50}
                tabIndex={0}
              ></div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <h2 className="font-semibold">Choose Vitamin Type</h2>
          <select className="px-2 py-2 bg-[#E8E8E8] rounded w-full border border-[#262626]/20 mt-2 outline-none">
            <option value="">All Vitamin</option>
            <option value="">Vitamin A</option>
            <option value="">Vitamin B</option>
            <option value="">Vitamin C</option>
            <option value="">Vitamin D</option>
            <option value="">Vitamin E</option>
          </select>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold">Turn Off Subtitle</p>
          <p className="text-2xl text-[#262626]/40">
            <GoDotFill />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setting;
