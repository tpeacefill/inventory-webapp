import React from 'react'
import Menubar from '../components/Menubar'
import Sidepanel from '../components/Sidepanel'

const Overview = () => {
  return (
    <div  className="flex flex-col bg-zinc-50" >
      <Menubar/>
      <Sidepanel/>
    </div>
  )
}

export default Overview
