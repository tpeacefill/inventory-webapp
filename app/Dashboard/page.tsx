import React from 'react';
import Menubar from '../components/Menubar';
import Sidepanel from '../components/Sidepanel';

const Overview = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-50">
      <Menubar />
      <div className="flex flex-grow">
        <Sidepanel />
        <div className="flex-grow bg-gray-100 p-2">
        <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
            <div className="flex flex-col px-2.5 pt-4 pb-7 bg-white shadow max-md:max-w-full">
              <h3 className="text-base font-medium text-black max-md:max-w-full font-Poppins">
                Key Metrics
              </h3>
              <div className="flex flex-col items-center px-3 pt-2 pb-20 mt-1.5 bg-neutral-50 max-md:max-w-full">
                <div className="flex gap-5 items-start self-stretch w-full text-xs leading-4 text-black text-opacity-50 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <p className='font-Poppins'>Total number of products</p>
                    <div className='flex flex-row items-center gap-5'>
                      <h3 className="mt-1 text-xl font-medium font-Poppins">_ _ _ _</h3> 
                      <p className="font-Poppins">Units</p>
                    </div>
                    
                  </div>
                  <div className="flex flex-1 gap-4 px-2 py-2 bg-white rounded-md items-center justify-center" style={{ maxWidth: '155px' }}>
                    <div className="flex gap-0.5 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.02497 3.84171C4.08877 3.69108 4.19548 3.56257 4.33181 3.47217C4.46814 3.38178 4.62806 3.33351 4.79164 3.33337H15.2083C15.4293 3.33337 15.6413 3.42117 15.7976 3.57745C15.9538 3.73373 16.0416 3.94569 16.0416 4.16671C16.0416 4.38772 15.9538 4.59968 15.7976 4.75596C15.6413 4.91224 15.4293 5.00004 15.2083 5.00004H6.75831L10.8833 9.26254C11.0275 9.41178 11.1109 9.60947 11.1171 9.81692C11.1232 10.0244 11.0518 10.2267 10.9166 10.3842L6.60331 15.4167H15.2083C15.4293 15.4167 15.6413 15.5045 15.7976 15.6608C15.9538 15.8171 16.0416 16.029 16.0416 16.25C16.0416 16.4711 15.9538 16.683 15.7976 16.8393C15.6413 16.9956 15.4293 17.0834 15.2083 17.0834H4.79164C4.63234 17.0834 4.47637 17.0377 4.34221 16.9518C4.20805 16.8659 4.10133 16.7434 4.03468 16.5987C3.96804 16.454 3.94426 16.2932 3.96617 16.1354C3.98808 15.9776 4.05476 15.8294 4.15831 15.7084L9.15747 9.87587L4.19164 4.74587C4.07824 4.62813 4.00197 4.47962 3.97233 4.31885C3.9427 4.15809 3.961 3.99215 4.02497 3.84171Z" fill="black" fill-opacity="0.5"/>
                    </svg>
                      <p className="font-Poppins">of products</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M7.30007 7.3L7.60005 7.02998L13.6001 1.66581L13.0001 1L7.3001 6.0941L1.60005 1L1.0001 1.66581L7.00015 7.02998L7.30007 7.3Z" fill="black" fill-opacity="0.65"/>
                      <path d="M7.22982 7.37803L7.30006 7.44128L7.37032 7.37804L7.67003 7.10826L7.67029 7.10802L13.6701 1.74409L13.7487 1.67383L13.6781 1.59552L13.0782 0.929712L13.0081 0.852027L12.9302 0.921709L7.3001 5.95328L1.67002 0.921709L1.59205 0.852027L1.52205 0.929712L0.922093 1.59552L0.85153 1.67383L0.930115 1.74409L6.92989 7.10802L6.93017 7.10826L7.22982 7.37803Z" stroke="black" stroke-opacity="0.65" stroke-width="0.21"/>
                    </svg>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="mt-14 w-10 aspect-square max-md:mt-10">
                   <path d="M16.6667 16.6667L23.3333 23.3333M16.6667 23.3333L23.3333 16.6667M20 35C22.9667 35 25.8668 34.1203 28.3336 32.4721C30.8003 30.8238 32.7229 28.4811 33.8582 25.7403C34.9935 22.9994 35.2906 19.9834 34.7118 17.0737C34.133 14.1639 32.7044 11.4912 30.6066 9.3934C28.5088 7.29562 25.8361 5.86701 22.9264 5.28823C20.0166 4.70945 17.0006 5.0065 14.2597 6.14181C11.5189 7.27713 9.17618 9.19972 7.52796 11.6665C5.87973 14.1332 5 17.0333 5 20C5 22.48 5.6 24.8167 6.66667 26.8783L5 35L13.1217 33.3333C15.1817 34.3983 17.5217 35 20 35Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="mt-2.5 mb-6 text-base font-light text-black text-opacity-40 font-Poppins">
                  No data to show
                </p>
              </div>
            </div>
            <div className="flex flex-col px-5 pt-2 pb-20 mt-2 text-base font-light bg-white shadow max-md:max-w-full">
              <h3 className="font-medium text-black max-md:max-w-full font-Poppins">
                Recent Activity
              </h3>
              <div className="flex gap-5 justify-between px-8 py-4 mt-3 text-xs uppercase whitespace-nowrap rounded-md shadow-sm bg-neutral-50 text-black text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <h4 className='font-Poppins'>ACTIVITY</h4>
                <h4 className='font-Poppins'>DESCRIPTION</h4>
                <h4 className="self-start font-Poppins">TIME</h4>
                <h4 className='font-Poppins'>STATUS</h4>
                <h4 className='font-Poppins'>ADMIN</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="self-center mt-36 w-10 aspect-square max-md:mt-10">
                   <path d="M16.6667 16.6667L23.3333 23.3333M16.6667 23.3333L23.3333 16.6667M20 35C22.9667 35 25.8668 34.1203 28.3336 32.4721C30.8003 30.8238 32.7229 28.4811 33.8582 25.7403C34.9935 22.9994 35.2906 19.9834 34.7118 17.0737C34.133 14.1639 32.7044 11.4912 30.6066 9.3934C28.5088 7.29562 25.8361 5.86701 22.9264 5.28823C20.0166 4.70945 17.0006 5.0065 14.2597 6.14181C11.5189 7.27713 9.17618 9.19972 7.52796 11.6665C5.87973 14.1332 5 17.0333 5 20C5 22.48 5.6 24.8167 6.66667 26.8783L5 35L13.1217 33.3333C15.1817 34.3983 17.5217 35 20 35Z" stroke="black" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className="self-center mt-2.5 mb-16 text-black text-opacity-40 max-md:mb-10 font-Poppins">
                No activity here
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-3 max-md:max-w-full">
            <div className="flex flex-col py-4 bg-white shadow max-md:max-w-full">
              <h3 className="self-start ml-2.5 text-base font-medium text-black font-Poppins">
                Stock Alerts
              </h3>
              <div className="flex gap-5 mx-7 mt-4 text-xs leading-4 text-black text-opacity-50 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <p className="flex-auto my-auto font-Poppins">
                  View the most urgent stock alerts
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="45" viewBox="0 0 65 25" fill="none">
                   <circle cx="52.5" cy="12.5" r="12.5" fill="#9747FF" fill-opacity="0.25"/>
                   <path d="M54.5 12.5L54.3071 12.2858L50.4756 8L50 8.42854L53.6386 12.5L50 16.5715L50.4756 17L54.3071 12.7142L54.5 12.5Z" fill="black" fill-opacity="0.65"/>
                   <path d="M54.5656 12.5591L54.6189 12.5L54.5657 12.4409L54.373 12.2269L54.3728 12.2267L50.5414 7.94113L50.4823 7.87501L50.4164 7.93438L49.9409 8.36291L49.8755 8.4218L49.9341 8.4874L53.5202 12.5L49.9341 16.5126L49.8755 16.5782L49.9409 16.6371L50.4164 17.0656L50.4823 17.125L50.5414 17.0589L54.3728 12.7734L54.373 12.7731L54.5656 12.5591Z" stroke="black" stroke-opacity="0.65" stroke-width="0.176667"/>
                   <circle cx="12.5" cy="12.5" r="12.5" transform="rotate(-180 12.5 12.5)" fill="#9747FF" fill-opacity="0.25"/>
                   <path d="M10.5 12.5L10.6929 12.7142L14.5244 17L15 16.5715L11.3614 12.5L15 8.42854L14.5244 8L10.6929 12.2858L10.5 12.5Z" fill="black" fill-opacity="0.65"/>
                   <path d="M10.4443 12.4498L10.3991 12.5L10.4443 12.5502L10.637 12.7642L10.6371 12.7644L14.4685 17.05L14.5187 17.1061L14.5746 17.0557L15.0502 16.6272L15.1057 16.5772L15.0559 16.5215L11.4619 12.5L15.0559 8.47851L15.1057 8.42282L15.0502 8.37282L14.5746 7.94428L14.5187 7.89388L14.4685 7.95001L10.6371 12.2356L10.637 12.2358L10.4443 12.4498Z" stroke="black" stroke-opacity="0.65" stroke-width="0.15"/>
                </svg>
              </div>
              <div className="flex gap-5 justify-between px-14 py-4 mx-7 mt-5 rounded-md shadow bg-neutral-50 leading-[133%] text-black text-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex flex-col text-xs">
                  <div>Current Stock Level</div>
                  <div className="self-end mt-6">Units</div>
                  <div className="mt-1.5 text-2xl font-medium">____</div>
                </div>
                
                <div className="flex flex-col">
                  <div className="text-xs">Percentage level drop</div>
                  <div className="self-center mt-9 text-2xl font-medium">
                    ____
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-9 pt-4 mx-7 mt-6 rounded-md shadow bg-neutral-50 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-2">
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <div className="flex gap-2.5 text-base font-medium text-black">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3069e2d4ee2edfbd41e0b5db464f919992897318ce278956554dbb5469eca?apiKey=4980a875853b463badfbb12abdca8126&"
                        className="shrink-0 aspect-[0.75] w-[21px]"
                      />
                      <div className="flex-auto my-auto">
                        Declining Stock Details
                      </div>
                    </div>
                    <div className="flex gap-2 mt-7 text-base font-[275] text-black text-opacity-80">
                      <div className="grow">Product Name</div>
                      <div className="shrink-0 self-start mt-3 h-px bg-black border border-black border-dashed w-[178px]" />
                    </div>
                  </div>
                  <div className="self-end mt-14 text-base text-right font-[275] text-black text-opacity-80 max-md:mt-10">
                    Unavailable
                  </div>
                </div>
                <div className="flex gap-2 mt-7 text-base font-[275] text-black text-opacity-80">
                  <div className="flex flex-auto gap-1">
                    <div className="grow">Product Category</div>
                    <div className="shrink-0 self-start mt-3 bg-black border border-black border-dashed h-[5px] w-[156px]" />
                  </div>
                  <div className="text-right">Unavailable</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-[275] text-black text-opacity-80">
                  <div className="grow">Total Stock Locked (TSL)</div>
                  <div className="shrink-0 self-start mt-3.5 h-1 bg-black border border-black border-dashed w-[107px]" />
                  <div className="my-auto text-right">Unavailable</div>
                </div>
                <div className="flex gap-2 mt-5 text-base font-[275] text-black text-opacity-80">
                  <div className="flex flex-auto gap-1">
                    <div className="grow">Total Stock Depleted (TSD)</div>
                    <div className="shrink-0 self-start mt-3.5 bg-black border border-black border-dashed h-[5px] w-[90px]" />
                  </div>
                  <div className="my-auto text-right">Unavailable</div>
                </div>
                <div className="flex gap-1.5 mt-6 text-base font-[275] text-black text-opacity-80">
                  <div className="flex flex-auto gap-0.5">
                    <div>Alert Type</div>
                    <div className="shrink-0 self-start mt-3 w-64 max-w-full bg-black border border-black border-dashed h-[5px]" />
                  </div>
                  <div className="text-right">Default</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-11 py-4 mt-3 bg-white shadow max-md:px-5 max-md:max-w-full">
              <div className="text-base font-medium text-black">
                Inventory Turnover - Category
              </div>
              <div className="mt-2.5 text-xs leading-4 text-black text-opacity-50">
                View performance of product turnovers
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/57f42b5f63a4e25b8b1e6ba41c784a80132e7d149243fe29e344f96a48ef8516?apiKey=4980a875853b463badfbb12abdca8126&"
                className="self-center mt-10 max-w-full aspect-square w-[215px]"
              />
              <div className="self-end mt-5 mr-9 text-xs leading-4 text-black text-opacity-50 max-md:mr-2.5">
                Unavilable
              </div>
              <div className="flex gap-2 items-start self-end">
                <div className="grow text-xs leading-4 text-black text-opacity-50">
                  Best Performing Category -{" "}
                </div>
                <div className="flex flex-col flex-1 mt-1">
                  <div className="self-end text-xs leading-4 text-black text-opacity-50">
                    Restock / month
                  </div>
                  <div className="mt-1 text-4xl font-semibold text-black text-opacity-20">
                    __
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
    </div>
  );
}

export default Overview;
