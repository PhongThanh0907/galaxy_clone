"use client";

import React, { useCallback, useState } from "react";

interface TitleProps {
  title: string;
  subTabs: string[];
}

const Titles: React.FC<TitleProps> = ({ title, subTabs }) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleChangeTab = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <div className="flex gap-12 items-center py-4">
      <span className="title_text text-gray-500">{title}</span>
      <div className="flex gap-12 text-[15px]">
        {subTabs.map((item, index) => (
          <div
            onClick={() => handleChangeTab(index + 1)}
            className={`${
              index + 1 === activeTab
                ? "sub_title_text relative text-[#034ea2]"
                : "text-gray-400"
            } font-semibold cursor-pointer transition-all`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Titles;
