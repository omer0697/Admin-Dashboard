import React from 'react'
import Chart from '../../Components/chart/Chart'
import Featured from '../../Components/featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import List from '../../Components/Table/Table'

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
        <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <List/>
          </div>
      </div>
    </div>
  )
}

export default Home