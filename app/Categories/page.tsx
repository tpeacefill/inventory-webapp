import React from "react";
import Sidepanel from "../components/Sidepanel";
import Menubar from "../components/Menubar";

const Categories = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-50">
      <Menubar />
      <div className="flex flex-grow h-full w-full">
        <Sidepanel />
        <div className="flex-grow bg-gray-100 p-2  flex flex-col flex-shrink">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 1265px:flex-col overflow-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
