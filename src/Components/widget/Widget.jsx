import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalleOutlinedtIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';



function Widget({type}) {
  let data;

  const amount = 100
  const diff = 20


  switch(type){
    case "user":
      data={
        title:"USERS",
        isMonet:false,
        link:"See all users",
        icon:<PersonOutlinedIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/> 
      };
      break;
    case "order":
      data={
        title:"ORDERS",
        isMonet:false,
        link:"View all orders",
        icon:<ShoppingCartCheckoutOutlinedIcon className='icon' style={{color:"goldenron",backgroundColor:"rgba(218,165,32,0.2)"}}/> 
      };
      break;
    case "earnings":
      data={
          title:"EARNINGS",
          isMonet:true,
          link:"Wiew net earnings",
          icon:<MonetizationOnOutlinedIcon className='icon' style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}}/> 
        };
        break;
    case "balance":
      data={
        title:"BALANCE",
        isMonet:true,
        link:"See details",
        icon:<AccountBalanceWalleOutlinedtIcon className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/> 
        };    
      break;      
      default:
        break;
  }

  return (
    <div className='widget'>
        <div className="left">
          <span className='title'>{data.title}</span>
          <span className='counter'>{data.isMonet && "$"} {amount}</span>
          <span className='link'>{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget