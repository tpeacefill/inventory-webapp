import React from "react";
import Menubar from "../../components/Menubar";
import Sidepanel from "../../components/Sidepanel";
import Image from "next/image";
import { Suspense } from "react";
import OverviewLoading from "@/app/LoadingUI/OverviewLoading";

const Overview = () => {
  return (
    <Suspense fallback={<OverviewLoading />}>
    <div className="flex flex-col h-screen w-screen bg-zinc-50">
      <Menubar />
      <div className="flex flex-grow h-full w-full">
        <Sidepanel />
        <div className="flex-grow bg-gray-100 p-2  flex flex-col flex-shrink">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 1265px:flex-col overflow-auto">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full 1265px:w-full">
              <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
                <div className="flex flex-col px-2.5 pt-4 pb-7 bg-white shadow max-md:max-w-full">
                  <h3 className="text-base font-medium text-black max-md:max-w-full font-Poppins">
                    Key Metrics
                  </h3>
                  <div className="flex flex-col items-center px-3 pt-2 pb-20 mt-1.5 bg-neutral-50 max-md:max-w-full">
                    <div className="flex gap-5 items-start self-stretch w-full text-xs leading-4 text-black text-opacity-50 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex flex-col flex-1">
                        <p className="font-Poppins">Total number of products</p>
                        <div className="flex flex-row items-center gap-5">
                          <h3 className="mt-1 text-xl font-medium font-Poppins">
                            _ _ _ _
                          </h3>
                          <p className="font-Poppins">Units</p>
                        </div>
                      </div>
                      <div
                        className="flex flex-1 gap-4 px-2 py-2 bg-white rounded-md items-center justify-center"
                        style={{ maxWidth: "155px" }}
                      >
                        <div className="flex gap-0.5 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.02497 3.84171C4.08877 3.69108 4.19548 3.56257 4.33181 3.47217C4.46814 3.38178 4.62806 3.33351 4.79164 3.33337H15.2083C15.4293 3.33337 15.6413 3.42117 15.7976 3.57745C15.9538 3.73373 16.0416 3.94569 16.0416 4.16671C16.0416 4.38772 15.9538 4.59968 15.7976 4.75596C15.6413 4.91224 15.4293 5.00004 15.2083 5.00004H6.75831L10.8833 9.26254C11.0275 9.41178 11.1109 9.60947 11.1171 9.81692C11.1232 10.0244 11.0518 10.2267 10.9166 10.3842L6.60331 15.4167H15.2083C15.4293 15.4167 15.6413 15.5045 15.7976 15.6608C15.9538 15.8171 16.0416 16.029 16.0416 16.25C16.0416 16.4711 15.9538 16.683 15.7976 16.8393C15.6413 16.9956 15.4293 17.0834 15.2083 17.0834H4.79164C4.63234 17.0834 4.47637 17.0377 4.34221 16.9518C4.20805 16.8659 4.10133 16.7434 4.03468 16.5987C3.96804 16.454 3.94426 16.2932 3.96617 16.1354C3.98808 15.9776 4.05476 15.8294 4.15831 15.7084L9.15747 9.87587L4.19164 4.74587C4.07824 4.62813 4.00197 4.47962 3.97233 4.31885C3.9427 4.15809 3.961 3.99215 4.02497 3.84171Z"
                              fill="black"
                              fill-opacity="0.5"
                            />
                          </svg>
                          <p className="font-Poppins">of products</p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M7.30007 7.3L7.60005 7.02998L13.6001 1.66581L13.0001 1L7.3001 6.0941L1.60005 1L1.0001 1.66581L7.00015 7.02998L7.30007 7.3Z"
                            fill="black"
                            fill-opacity="0.65"
                          />
                          <path
                            d="M7.22982 7.37803L7.30006 7.44128L7.37032 7.37804L7.67003 7.10826L7.67029 7.10802L13.6701 1.74409L13.7487 1.67383L13.6781 1.59552L13.0782 0.929712L13.0081 0.852027L12.9302 0.921709L7.3001 5.95328L1.67002 0.921709L1.59205 0.852027L1.52205 0.929712L0.922093 1.59552L0.85153 1.67383L0.930115 1.74409L6.92989 7.10802L6.93017 7.10826L7.22982 7.37803Z"
                            stroke="black"
                            stroke-opacity="0.65"
                            stroke-width="0.21"
                          />
                        </svg>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="mt-14 w-10 aspect-square max-md:mt-10"
                    >
                      <path
                        d="M16.6667 16.6667L23.3333 23.3333M16.6667 23.3333L23.3333 16.6667M20 35C22.9667 35 25.8668 34.1203 28.3336 32.4721C30.8003 30.8238 32.7229 28.4811 33.8582 25.7403C34.9935 22.9994 35.2906 19.9834 34.7118 17.0737C34.133 14.1639 32.7044 11.4912 30.6066 9.3934C28.5088 7.29562 25.8361 5.86701 22.9264 5.28823C20.0166 4.70945 17.0006 5.0065 14.2597 6.14181C11.5189 7.27713 9.17618 9.19972 7.52796 11.6665C5.87973 14.1332 5 17.0333 5 20C5 22.48 5.6 24.8167 6.66667 26.8783L5 35L13.1217 33.3333C15.1817 34.3983 17.5217 35 20 35Z"
                        stroke="black"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="mt-2.5 mb-6 text-base font-light text-black text-opacity-40 font-Poppins">
                      No data to show
                    </p>
                  </div>
                </div>
                <div className="flex flex-col px-2.5 pt-2 pb-20 mt-2 text-base font-light bg-white shadow max-md:max-w-full">
                  <div className="w-full flex pb-1 border-b border-solid border-black border-opacity-10">
                    <h3 className="self-start text-base font-medium text-black font-Poppins">
                      Recent Activity
                    </h3>
                  </div>
                  <div className="flex gap-5 justify-between px-4 py-4 mt-3 text-xs uppercase whitespace-nowrap rounded-md shadow-sm bg-neutral-50 text-black text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <h4 className="font-Poppins">ACTIVITY</h4>
                    <h4 className="font-Poppins">DESCRIPTION</h4>
                    <h4 className="self-start font-Poppins">TIME</h4>
                    <h4 className="font-Poppins">STATUS</h4>
                    <h4 className="font-Poppins">ADMIN</h4>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    className="self-center mt-36 w-10 aspect-square max-md:mt-10"
                  >
                    <path
                      d="M16.6667 16.6667L23.3333 23.3333M16.6667 23.3333L23.3333 16.6667M20 35C22.9667 35 25.8668 34.1203 28.3336 32.4721C30.8003 30.8238 32.7229 28.4811 33.8582 25.7403C34.9935 22.9994 35.2906 19.9834 34.7118 17.0737C34.133 14.1639 32.7044 11.4912 30.6066 9.3934C28.5088 7.29562 25.8361 5.86701 22.9264 5.28823C20.0166 4.70945 17.0006 5.0065 14.2597 6.14181C11.5189 7.27713 9.17618 9.19972 7.52796 11.6665C5.87973 14.1332 5 17.0333 5 20C5 22.48 5.6 24.8167 6.66667 26.8783L5 35L13.1217 33.3333C15.1817 34.3983 17.5217 35 20 35Z"
                      stroke="black"
                      stroke-opacity="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="self-center mt-2.5 mb-16 text-black text-opacity-40 max-md:mb-10 font-Poppins">
                    No activity here
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full 1265px:ml-0 1265px:w-full">
              <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
                <div className="flex flex-col py-4 bg-white shadow max-md:max-w-full">
                  <div className="w-full pl-7 flex pb-1 border-b border-solid border-black border-opacity-10">
                    <h3 className="self-start text-base font-medium text-black font-Poppins">
                      Stock Alerts
                    </h3>
                  </div>
                  <div className="flex gap-5 mx-7 text-xs leading-4 text-black text-opacity-50 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                    <p className="flex-auto my-auto font-Poppins">
                      View the most urgent stock alerts
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="85"
                      height="45"
                      viewBox="0 0 65 25"
                      fill="none"
                    >
                      <circle
                        cx="52.5"
                        cy="12.5"
                        r="12.5"
                        fill="#9747FF"
                        fill-opacity="0.25"
                      />
                      <path
                        d="M54.5 12.5L54.3071 12.2858L50.4756 8L50 8.42854L53.6386 12.5L50 16.5715L50.4756 17L54.3071 12.7142L54.5 12.5Z"
                        fill="black"
                        fill-opacity="0.65"
                      />
                      <path
                        d="M54.5656 12.5591L54.6189 12.5L54.5657 12.4409L54.373 12.2269L54.3728 12.2267L50.5414 7.94113L50.4823 7.87501L50.4164 7.93438L49.9409 8.36291L49.8755 8.4218L49.9341 8.4874L53.5202 12.5L49.9341 16.5126L49.8755 16.5782L49.9409 16.6371L50.4164 17.0656L50.4823 17.125L50.5414 17.0589L54.3728 12.7734L54.373 12.7731L54.5656 12.5591Z"
                        stroke="black"
                        stroke-opacity="0.65"
                        stroke-width="0.176667"
                      />
                      <circle
                        cx="12.5"
                        cy="12.5"
                        r="12.5"
                        transform="rotate(-180 12.5 12.5)"
                        fill="#9747FF"
                        fill-opacity="0.25"
                      />
                      <path
                        d="M10.5 12.5L10.6929 12.7142L14.5244 17L15 16.5715L11.3614 12.5L15 8.42854L14.5244 8L10.6929 12.2858L10.5 12.5Z"
                        fill="black"
                        fill-opacity="0.65"
                      />
                      <path
                        d="M10.4443 12.4498L10.3991 12.5L10.4443 12.5502L10.637 12.7642L10.6371 12.7644L14.4685 17.05L14.5187 17.1061L14.5746 17.0557L15.0502 16.6272L15.1057 16.5772L15.0559 16.5215L11.4619 12.5L15.0559 8.47851L15.1057 8.42282L15.0502 8.37282L14.5746 7.94428L14.5187 7.89388L14.4685 7.95001L10.6371 12.2356L10.637 12.2358L10.4443 12.4498Z"
                        stroke="black"
                        stroke-opacity="0.65"
                        stroke-width="0.15"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-5 justify-between px-7 py-4 mx-7 mt-2 rounded-md shadow bg-neutral-50 leading-[133%] text-black text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex flex-col text-xs">
                      <p className="font-Poppins">Current Stock Level</p>
                      <div className="flex flex-row items-center justify-center gap-5">
                        <p className="text-2xl font-medium font-Poppins">
                          _ _ _
                        </p>
                        <p className="self-end font-Poppins">Units</p>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="49"
                      viewBox="0 0 2 49"
                      fill="none"
                    >
                      <path d="M1 0V48.793" stroke="#D5D5D5" />
                    </svg>
                    <div className="flex flex-col">
                      <p className="text-xs font-Poppins">
                        Percentage level drop
                      </p>
                      <p className="self-center text-2xl font-medium font-Poppins">
                        _ _ _
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col px-9 pt-4 mx-7 mt-3 rounded-md shadow bg-neutral-50 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                    <div className="flex gap-2">
                      <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                        <div className="flex gap-2.5 text-base font-medium text-black">
                          <Image
                            src="/aim1.svg"
                            alt="aim"
                            width={21}
                            height={28}
                          />
                          <h3 className="flex-auto my-auto font-Poppins">
                            Declining Stock Details
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-auto gap-2 flex-row mt-3 text-base font-[275] text-black text-opacity-80">
                      <p className="grow font-Poppins">Product Name</p>
                      <p className="text-right font-Poppins">Unavailable</p>
                    </div>
                    <div className="flex flex-auto gap-2 flex-row mt-3 text-base font-[275] text-black text-opacity-80">
                      <p className="grow font-Poppins">Product Category</p>
                      <p className="text-right font-Poppins">Unavailable</p>
                    </div>
                    <div className="flex gap-2 mt-3 text-base font-[275] text-black text-opacity-80">
                      <p className="grow font-Poppins">
                        Total Stock Locked (TSL)
                      </p>
                      <p className="my-auto text-right font-Poppins">
                        Unavailable
                      </p>
                    </div>
                    <div className="flex gap-2 mt-3 text-base font-[275] text-black text-opacity-80">
                      <p className="grow font-Poppins">
                        Total Stock Depleted (TSD)
                      </p>
                      <p className="my-auto text-right font-Poppins">
                        Unavailable
                      </p>
                    </div>
                    <div className="flex gap-2 mt-3 mb-4 text-base font-[275] text-black text-opacity-80">
                      <p className="grow font-Poppins">Alert Type</p>
                      <p className="my-auto text-right font-Poppins">
                        Unavailable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col px-8 py-4 mt-3 bg-white shadow max-md:px-5 max-md:max-w-full">
                  <h3 className="text-base font-medium text-black font-Poppins">
                    Inventory Turnover - Category
                  </h3>
                  <p className="mt-1 text-xs leading-4 text-black text-opacity-50 font-Poppins">
                    View performance of product turnovers
                  </p>
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="215"
                      height="215"
                      viewBox="0 0 215 215"
                      fill="none"
                      className="self-center mt-5 max-w-full aspect-square w-[215px] mb-4"
                    >
                      <path
                        d="M107.5 0C115.111 -3.32671e-07 122.7 0.808201 130.14 2.41101L123.348 33.9377C118.14 32.8157 112.827 32.25 107.5 32.25L107.5 0Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M130.14 2.41101C139.237 4.3709 148.042 7.50382 156.332 11.7312L141.683 40.4618C135.879 37.5027 129.716 35.3096 123.348 33.9377L130.14 2.41101Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M156.332 11.7312C175.286 21.3954 190.945 36.4662 201.328 55.0354L173.18 70.7748C165.912 57.7763 154.95 47.2268 141.683 40.4618L156.332 11.7312Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M201.328 55.0354C203.184 58.3544 204.862 61.7696 206.356 65.2665L176.699 77.9365C175.654 75.4887 174.479 73.0981 173.18 70.7748L201.328 55.0354Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M206.356 65.2665C212.353 79.3034 215.292 94.4565 214.977 109.718C214.662 124.979 211.101 139.998 204.53 153.775L175.421 139.893C180.021 130.248 182.514 119.735 182.734 109.052C182.954 98.3695 180.897 87.7624 176.699 77.9365L206.356 65.2665Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M204.53 153.775C193.88 176.107 175.852 194.082 153.489 204.666L139.692 175.516C155.347 168.107 167.966 155.525 175.421 139.893L204.53 153.775Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M153.489 204.666C150.052 206.293 146.531 207.736 142.941 208.99L132.309 178.543C134.822 177.665 137.286 176.655 139.692 175.516L153.489 204.666Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M142.941 208.99C123.67 215.719 102.881 216.823 83.0057 212.172L90.354 180.771C104.267 184.026 118.819 183.254 132.309 178.543L142.941 208.99Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M83.0057 212.172C73.5312 209.955 64.4016 206.462 55.867 201.788L71.3569 173.502C77.3311 176.773 83.7219 179.219 90.354 180.771L83.0057 212.172Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M55.867 201.788C42.2913 194.354 30.4811 184.076 21.2437 171.657C12.0064 159.238 5.55981 144.97 2.34474 129.83L33.8913 123.131C36.1419 133.729 40.6545 143.716 47.1206 152.41C53.5868 161.103 61.8539 168.298 71.3569 173.502L55.867 201.788Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M2.34474 129.83C-2.61402 106.478 0.341147 82.1402 10.7442 60.6537L39.771 74.7076C32.4888 89.7481 30.4202 106.785 33.8913 123.131L2.34474 129.83Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M10.7442 60.6537C17.024 47.6836 25.8474 36.1084 36.6898 26.6163L57.9329 50.8814C50.3431 57.5259 44.1668 65.6285 39.771 74.7076L10.7442 60.6537Z"
                        fill="#EFEFEF"
                      />
                      <path
                        d="M36.6898 26.6163C56.2889 9.45815 81.4514 -3.10626e-07 107.5 0V32.25C89.266 32.25 71.6523 38.8707 57.9329 50.8814L36.6898 26.6163Z"
                        fill="#EFEFEF"
                      />
                    </svg>
                    <div className="flex flex-row items-center w-full justify-center space-x-2">
                      <p className="text-xs leading-4 text-black text-opacity-50 font-Poppins">
                        Best Performing Category -
                      </p>
                      <p className="text-4xl font-semibold text-black text-opacity-20 font-Poppins">
                        _ _
                      </p>
                      <div className="flex flex-col">
                        <p className="text-xs leading-4 text-black text-opacity-50 font-Poppins">
                          Unavailable
                        </p>
                        <p className="text-xs leading-4 text-black text-opacity-50 font-Poppins">
                          Restock / month
                        </p>
                      </div>
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

export default Overview;
