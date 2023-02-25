import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import {RiUser3Line} from 'react-icons/ri';
import {MdOutlineSwitchAccount,MdOutlineVerifiedUser} from 'react-icons/md';
import {IoIosLock,IoIosNotificationsOutline} from 'react-icons/io';
import {RiComputerLine} from 'react-icons/ri';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {TbAffiliate} from 'react-icons/tb';
import {SlTrophy} from 'react-icons/sl';
import {BiCodeAlt} from 'react-icons/bi';
import '../User_Dashboard/UserAccount.css'

const UserTickers = () => {
  return (
    <>
      <section id ="account" className='account'>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-3'>
      <div className='account_button'>
      <Nav.Link as={Link} to={"/user-account"}><button className='d-flex'><RiUser3Line/>Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-sub-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Sub-Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-security-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Securities-Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-security"}><button className='d-flex'><IoIosLock/>Security</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-notification"}><button className='d-flex'><IoIosNotificationsOutline/>Notifications</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-interface"}><button className='d-flex'  id='button_act'><RiComputerLine/>Interface</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><MdOutlineVerifiedUser/>Verification</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-affiliate"}><button className='d-flex'><TbAffiliate/>Affiliate</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><HiOutlineDocumentReport/>Reports</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><SlTrophy/>LeaderBoard</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-api"}><button className='d-flex'><BiCodeAlt/>API</button></Nav.Link>
      </div>
    </div>
    <div className='col-lg-9'>
    <div id='user_name'>
        <h1>Notifications</h1>
        </div>
    <div className='nav-h1'>
    <Nav.Link as={Link} to={"/user-interface"}><h1>Charts</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-layout"}><h1>Layout</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-order-book"}><h1>Order Book</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-theme"}><h1>Theme</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-tickers"}><h1>Tickers</h1></Nav.Link>
    </div>
    <hr className='mt-0'></hr>
    <div className='address-book'>
    <h1>Ticker search option</h1>
    <div id='check_box'>
        <input type="checkbox" name="trading"></input>
        <label>Search globally</label><br/><br/><br/>
        </div>
        <div className='address-book'>
    <h1>Trading Volume units</h1>
    <div id='check_box'>
        <input type="radio" name="trading" className='mt-0'></input>
        <label>Show volume in terms of the first currency in the pair (default)</label><br/>
            <input type="radio" name="trading" className='mt-0'></input>
        <label>Show volume in USD equivalent</label><br/>
        <input type="radio" name="trading" className='mt-0'></input>
        <label>Show volume in BTC equivalent</label><br/>
        <input type="radio" name="trading" className='mt-0'></input>
        <label>Show volume in ETH equivalent</label><br/>
        </div>
      <hr className='mt-3'></hr>
      </div>
      </div>
      <div className='address-book'>
    <h1>Currency default order</h1>
    <p>y default, the sort order for currencies is adjusted periodically to put the most traded currencies first. However, if you prefer to lock the list to your preferred order, you may drag and drop the currencies below to in any order you like.<br/><br/>Note that several places, like the tickers located in the sidebar, you can choose custom sorting options. The order you choose here will only apply in those cases when you don't have another sort order chosen.<br/><br/>In the event that a new currency is added to the platform, it will default to the end of the list.</p>
    <div className='input_box'>
            <input list="sound" name="text" className='mt-2' placeholder='Common'></input>
           <datalist id="sound">
  <option value="Common"/>
  <option value="Derivatives"/>
  
         </datalist>
         </div> 
      </div>
      
      <div id='btn_box'>
        <button className='btn btn-primary'>Save Changes</button>
        </div>
      </div>
      </div>
      </div>
     </section> 
    </>
  )
}

export default UserTickers
