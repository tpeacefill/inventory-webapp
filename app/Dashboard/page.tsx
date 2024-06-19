import React from 'react'
import Menubar from '../components/Menubar'
import Sidepanel from '../components/Sidepanel'

const Overview = () => {
  return (
    <div  className="bg-zinc-50 min-h-[982px]" >
      <Menubar/>
      <Sidepanel/>
    </div>
  )
}

export default Overview
