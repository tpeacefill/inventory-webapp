"use client";
import React, { useState, Suspense } from "react";
import Menubar from "../../components/Menubar";
import Sidepanel from "../../components/Sidepanel";
import Image from "next/image";
import ProductsLoading from "@/app/LoadingUI/ProductsLoading";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Categories = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Suspense fallback={<ProductsLoading />}>
      <div className="flex flex-col h-screen w-screen bg-zinc-50 overflow-hidden">
        <Menubar />
        <div className="flex flex-grow overflow-hidden">
          <Sidepanel />
          <div className="flex-grow bg-gray-100 py-2 px-2 flex flex-col flex-shrink overflow-hidden">
            <div className="flex max-md:flex-col max-md:gap-0 1265px:flex-col overflow-auto h-full">
              <div className="flex flex-col bg-white shadow w-full h-full overflow-x-auto">
                <div className="unmovable">
                  <div className="w-full flex pb-1 border-b border-solid border-black border-opacity-10 pt-3 pl-3">
                    <h3 className="self-start text-base font-medium text-black font-Poppins">
                      Product Categories
                    </h3>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                    <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full pl-3 pr-3">
                      <div className="flex gap-1.5 px-3 py-1 text-base font-light whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 w-[30%]">
                        <Image
                          src="/search.svg"
                          width={20}
                          height={20}
                          alt="Search"
                        />
                        <input
                          type="text"
                          className="flex-auto my-auto font-Poppins outline-none bg-transparent pl-2 overflow-hidden text-ellipsis"
                          placeholder="Search"
                        />
                      </div>
                      <div className="flex gap-5 text-sm leading-4 text-white max-md:flex-wrap">
                        <button className="flex gap-1 px-4 py-1 text-base font-light whitespace-nowrap bg-purple-500 rounded-md justify-center items-center font-Poppins md:px-3 md:py-2">
                          <Image
                            src="/add.svg"
                            width={20}
                            height={20}
                            alt="Add Product"
                          />
                          <p className="my-auto font-Poppins hidden md:block">
                            New Category
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      variant="fullWidth"
                      TabIndicatorProps={{
                        sx: {
                          backgroundColor: "#a855f7", // Use the Tailwind color here
                        },
                      }}
                      sx={{
                        "& .MuiTab-root": {
                          flexGrow: 1,
                        },
                      }}
                    >
                      <Tab
                        label="CLOTHING"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(0)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="FEEDING"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(1)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="DIAPERING"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(2)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="BEDDINGS"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(3)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="TOYS"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(4)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="BATHING"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(5)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="HEALTH"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(6)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="TRAVELS"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(7)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="MONITORING"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(8)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                      <Tab
                        label="ESSENTIALS"
                        className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins"
                        {...a11yProps(9)}
                        sx={{
                          "&.Mui-selected": {
                            color: "#a855f7", // Use the Tailwind color here
                          },
                        }}
                      />
                    </Tabs>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Categories;