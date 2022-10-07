import React from 'react'
import Chart from '../../Components/chart/Chart'
import Featured from '../../Components/featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widget from '../../Components/widget/Widget'
import "./home.scss"

function Home() {
  return (
    <div className='home'>
      <Sidebar></Sidebar>
      <div className='homeContainer'>
        <Navbar></Navbar>
        <div className="widgets">
          <Widget type="user"></Widget>
          <Widget type="order"></Widget>
          <Widget type="earnings"></Widget>
          <Widget type="balance"></Widget>
        </div>
        <div className='charts'>
          <Featured/>
          <Chart/>
          
        </div>
      </div>
    </div>
  )
}

export default Home