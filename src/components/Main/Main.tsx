/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import TopTabs from "../TopTabs/TopTabs";
import { tabsData } from "../../../public/fakeData";
import { TbStarFilled } from "react-icons/tb";
import { RxStar } from "react-icons/rx";
import Setting from "../Setting/Setting";

interface MainContentItem {
  description: string;
  images?: { img: string }[];
  subCatehory: string | undefined;
}

interface Category {
  subCatehory: string | undefined;
  _id: number;
  category: string;
  description?: string;
  mainContent?: MainContentItem[];
}

interface Category {
  _id: number;
  category: string;
  description?: string;
  mainContent?: {
    description: string;
    images?: { img: string }[];
    subCatehory: string | undefined;
  }[];
}

const Main = () => {
  const [selectedContent, setSelectedContent] = useState<{
    description: string | undefined;
    images?: { img: string }[];
    subCatehory: string | undefined;
  } | null>(null);

  useEffect(() => {
    const firstCategory = tabsData[0].content[0];
    setSelectedContent({
      description: firstCategory.mainContent
        ? firstCategory.mainContent[0]?.description || ""
        : firstCategory.description || "",
      images: firstCategory.mainContent
        ? firstCategory.mainContent[0]?.images || []
        : [],
      subCatehory: firstCategory.mainContent
        ? firstCategory.mainContent[0]?.subCatehory || ""
        : firstCategory.subCatehory || "",
    });
  }, []);

  const handleCategoryClick = (
    description: string,
    images?: { img: string }[],
    subCatehory?: string
  ) => {
    setSelectedContent({ description, images, subCatehory });
  };

  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <div className="bg-white lg:w-1/5 rounded py-2 px-4">
        <TopTabs
          tabs={tabsData}
          onCategoryClick={(category) => {
            const categoryData = tabsData
              .flatMap((tab) => tab.content)
              .find((item) => item.category === category) as
              | Category
              | undefined;

            if (categoryData) {
              const description = categoryData.mainContent
                ? categoryData.mainContent[0]?.description || ""
                : categoryData.description || "";
              const images = categoryData.mainContent
                ? categoryData.mainContent[0]?.images || []
                : [];
              const subCatehory = categoryData.mainContent
                ? categoryData.mainContent[0]?.subCatehory || ""
                : categoryData.subCatehory || "";

              handleCategoryClick(description, images, subCatehory);
            }
          }}
        />
      </div>
      <div className="bg-[#fff] lg:w-4/5 px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <div>
              <h2 className="font-extrabold text-2xl capitalize">
                Health Benefits of An {selectedContent?.subCatehory}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                <div>
                  <h2 className="font-semibold text-lg">
                    Supports eye Health :{" "}
                  </h2>
                  <p className="mt-2 text-gray-700">
                    {selectedContent?.description?.slice(0, 100)}
                  </p>
                </div>

                <div>
                  <h2 className="font-semibold text-lg">
                    Supports eye Health :{" "}
                  </h2>
                  <p className="mt-2 text-gray-700">
                    {selectedContent?.description?.slice(0, 100)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {selectedContent?.images?.slice(0, 1).map((image, index) => (
              <img
                key={index}
                src={image.img}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded"
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-lg">Supports eye Health : </h2>
          <p className="mt-2 text-gray-700">{selectedContent?.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          <div className="">
            {selectedContent?.images?.slice(1, 2).map((image, index) => (
              <img
                key={index}
                src={image.img}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded"
              />
            ))}
          </div>

          <div>
            <h2 className="font-semibold text-lg">Supports eye Health : </h2>
            <p className="mt-2 text-gray-700">
              {selectedContent?.description?.slice(0, 230)}
            </p>
          </div>
        </div>

        <div className="py-4 mt-4">
          <h2 className="text-sm font-bold capitalize">was this helpfull?</h2>
          <div className="mt-2 flex items-center gap-2 text-xl text-[#FE7104]">
            <p className="">
              <TbStarFilled />
            </p>
            <p>
              <TbStarFilled />
            </p>
            <p>
              <TbStarFilled />
            </p>
            <p>
              <TbStarFilled />
            </p>
            <p>
              <RxStar />
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/6 rounded">
        <Setting></Setting>
      </div>
    </div>
  );
};

export default Main;
