import React from 'react';
import Menubar from '../components/Menubar';
import Sidepanel from '../components/Sidepanel';

const Overview = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-50">
      <Menubar />
      {/* <div className="flex flex-grow">
        <Sidepanel />
        <div className="flex-grow bg-gray-100 p-5">
          
          <p className="font-Poppins">Main Content Area</p>
        </div>
      </div> */}
    </div>
  );
}

export default Overview;
