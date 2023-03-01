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

const UserFunding = () => {
  return (
    <>
      <section id ="account" className='account'>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-3'>
      <div className='account_button'>
      <Nav.Link as={Link} to={"/user-account"}><button className='d-flex' id='button_act'><RiUser3Line/>Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-sub-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Sub-Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-security-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Securities-Account</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><IoIosLock/>Security</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-notification"}><button className='d-flex'><IoIosNotificationsOutline/>Notifications</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-interface"}><button className='d-flex'><RiComputerLine/>Interface</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><MdOutlineVerifiedUser/>Verification</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-affiliate"}><button className='d-flex'><TbAffiliate/>Affiliate</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><HiOutlineDocumentReport/>Reports</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><SlTrophy/>LeaderBoard</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><BiCodeAlt/>API</button></Nav.Link>
      </div>
    </div>
    <div className='col-lg-9'>
    <div className='nav-h1'>
    <Nav.Link as={Link} to={"/user-account"}><h1>Account</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-address-book"}><h1>Address Book</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-date-and-time"}><h1>Date & Time</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-fees"}><h1>Fees</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-funding"}><h1>Funding</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-account-info"}><h1>Account Info</h1></Nav.Link>
    </div>
    <hr className='mt-0'></hr>
    <div className='address-book'>
    <h1>Funding Options</h1>
    <div id='check_box'>
        <input type="checkbox" name="trading"></input>
        <label>Keep taken margin funding open used in a margin position</label><br/>
            <input type="checkbox" name="trading"></input>
        <label>close margin funds expiring the soonest first</label><br/>
            <input type="checkbox" name="trading"></input>
        <label>When you take new margin funding, use them immediately</label><br/>
        <div id='btn_box'>
        <button className='btn btn-primary'>Save Changes</button>
        </div>
      </div>
      </div>
    </div>
</div>
      </div>
     </section> 
    </>
  )
}

export default UserFunding
