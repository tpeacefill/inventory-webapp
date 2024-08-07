import React from "react";
import Menubar from "../../components/Menubar";
import Sidepanel from "../../components/Sidepanel";
import Image from "next/image";
import { Suspense } from "react";
import ProductsLoading from "@/app/LoadingUI/ProductsLoading";

const Products = () => {
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
                    Available products
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
                      <button className="flex gap-1.5 px-3 py-1 text-base font-light whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 justify-center items-center font-Poppins md:px-3 md:py-1">
                        <Image
                          src="/filter.svg"
                          width={20}
                          height={20}
                          alt="Filter"
                        />
                        <p className="flex-auto my-auto font-Poppins hidden md:block">
                          Filter
                        </p>
                      </button>
                      <button className="flex gap-1.5 px-3 py-1 text-base font-light whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 justify-center items-center font-Poppins md:px-3 md:py-1">
                        <Image
                          src="/date.svg"
                          width={20}
                          height={20}
                          alt="Date"
                        />
                        <p className="flex-auto my-auto font-Poppins hidden md:block">
                          Date
                        </p>
                      </button>

                      <button className="flex gap-1 px-3 py-1 text-base font-light whitespace-nowrap bg-purple-500 rounded-md justify-center items-center font-Poppins md:px-3 md:py-2">
                        <Image
                          src="/add.svg"
                          width={20}
                          height={20}
                          alt="Add Product"
                        />
                        <p className="my-auto font-Poppins hidden md:block">
                          Add Product
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto h-full">
                <div className="w-full overflow-x-auto h-full min-w-[835px] px-3">
                  <div className="h-full w-full">
                    <div className="min-w-full bg-neutral-50 sticky top-0">
                      <table className="min-w-full h-full">
                        <thead className="bg-neutral-50">
                          <tr className="text-xs">
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              Product Name
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              SKU
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              Items Sold
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              Unit Price
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              In-Stock
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              Total Value
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              Current Value
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              Status
                            </th>
                            <th className="px-3 py-4 font-light text-black text-opacity-50 uppercase font-Poppins">
                              Category
                            </th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="h-full w-full">
                      <table className="min-w-full divide-y divide-gray-200 w-full h-full">
                        <tbody className="bg-white divide-y divide-gray-200 w-full">
                          <tr className="text-sm font-light text-black text-opacity-70 w-fit">
                            <td className="py-2 gap-y-3" colSpan={9}>
                              <div className="flex flex-col justify-center items-center m-t-10">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                >
                                  <path
                                    d="M16.6667 16.6667L23.3333 23.3333M16.6667 23.3333L23.3333 16.6667M20 35C22.9667 35 25.8668 34.1203 28.3336 32.4721C30.8003 30.8238 32.7229 28.4811 33.8582 25.7403C34.9935 22.9994 35.2906 19.9834 34.7118 17.0737C34.133 14.1639 32.7044 11.4912 30.6066 9.3934C28.5088 7.29562 25.8361 5.86701 22.9264 5.28823C20.0166 4.70945 17.0006 5.0065 14.2597 6.14181C11.5189 7.27713 9.17618 9.19972 7.52796 11.6665C5.87973 14.1332 5 17.0333 5 20C5 22.48 5.6 24.8167 6.66667 26.8783L5 35L13.1217 33.3333C15.1817 34.3983 17.5217 35 20 35Z"
                                    stroke="black"
                                    stroke-opacity="0.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                                <p className="self-center mt-2.5 text-base font-light text-black text-opacity-40">
                                  No available products
                                </p>
                                <p className="self-center text-base font-medium text-purple-500">
                                  Click to add product
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default Products;
