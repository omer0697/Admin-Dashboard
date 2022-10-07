import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlined  from '@mui/icons-material/ListOutlined';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='search'>
          <input type="text" placeholder="Search..."></input>
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          
          <div className="item">
            <ListOutlined className='icon'/>
          </div>

          <div className="item">
            <img
            className='avatar'
            src='https://media-exp1.licdn.com/dms/image/D4D35AQFyJgcesODUSA/profile-framedphoto-shrink_200_200/0/1664491182911?e=1665522000&v=beta&t=RHw3nao8KaemvfWCA4DLHniBlSMhSNmNLU-X2Xozu4w'
            alt=''
            />
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Navbar