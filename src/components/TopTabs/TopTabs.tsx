import Image from "next/image";
import React, { useState } from "react";
import { RiBarChart2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

interface Category {
  _id: number;
  category: string;
  description?: string;
  imglabel: string;
  mainContent?: {
    description: string;
    images?: { img: string }[];
  }[];
}

interface Tab {
  id: number;
  label: string;
  content: Category[];
}

interface TopTabsProps {
  tabs: Tab[];
  onCategoryClick: (category: string) => void;
}

const TopTabs: React.FC<TopTabsProps> = ({ tabs, onCategoryClick }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || 0);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    tabs[0]?.content[0]?.category || null
  );
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Manage menu visibility for mobile

  return (
    <div>
      {/* Desktop View */}
      <div className="lg:flex hidden items-center justify-start gap-2 border border-orange-400/40 rounded p-2">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              onClick={() => {
                setActiveTab(tab.id);
                setActiveCategory(tab.content[0]?.category || null);
              }}
              className={`px-4 py-2 font-semibold text-sm rounded transition ${
                activeTab === tab.id
                  ? "text-orange-600 bg-orange-100"
                  : "text-gray-600 bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 py-4 px-2  rounded lg:block hidden">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id}>
              <h3 className="font-bold text-lg text-gray-700 mb-2">
                Fruits List
              </h3>
              <ul className="space-y-2">
                {tab.content.map((category) => (
                  <div
                    key={category._id}
                    className={`px-2 py-2 rounded ${
                      activeCategory === category.category
                        ? "border border-[#FE7104]"
                        : "border border-[#FE7104]/10"
                    }`}
                    onClick={() => {
                      onCategoryClick(category.category);
                      setActiveCategory(category.category);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-[#F1DEDD]">
                        <Image
                          src={category.imglabel}
                          alt="category"
                          height={20}
                          width={20}
                        />
                      </div>
                      <button className="text-md font-semibold capitalize">
                        {category.category}
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex lg:hidden items-center justify-between my-4">
        <p
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsMenuVisible(!isMenuVisible)} // Toggle menu visibility
        >
          <span className="text-[#FE7104]">
            <RiBarChart2Line />
          </span>
          <span>{isMenuVisible ? "Hide the menu" : "Show the menu"}</span>
        </p>
        <p>
          <IoIosArrowDown
            className={isMenuVisible ? "rotate-180 transition" : "transition"}
          />
        </p>
      </div>

      {/* Mobile Menu Content */}
      {isMenuVisible && (
        <div className="mt-4 py-4 px-2 rounded lg:hidden block">
          {tabs.map((tab) =>
            activeTab === tab.id ? (
              <div key={tab.id}>
                <h3 className="font-bold text-lg text-gray-700 mb-2">
                  Fruits List
                </h3>
                <ul className="space-y-2">
                  {tab.content.map((category) => (
                    <div
                      key={category._id}
                      className={`px-2 py-2 rounded ${
                        activeCategory === category.category
                          ? "border border-[#FE7104]"
                          : "border border-[#FE7104]/10"
                      }`}
                      onClick={() => {
                        onCategoryClick(category.category);
                        setActiveCategory(category.category);
                        setIsMenuVisible(false); // Close menu after selection
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-md bg-[#F1DEDD]">
                          <Image
                            src={category.imglabel}
                            alt="category"
                            height={20}
                            width={20}
                          />
                        </div>
                        <button className="text-md font-semibold capitalize">
                          {category.category}
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default TopTabs;
