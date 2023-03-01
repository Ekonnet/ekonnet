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
import { Helmet } from 'react-helmet';
const UserEmail = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Email</title>
      </Helmet>
      <section id ="account" className='account'>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-3'>
      <div className='account_button'>
      <Nav.Link as={Link} to={"/user-account"}><button className='d-flex'><RiUser3Line/>Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-sub-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Sub-Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-security-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Securities-Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-security"}><button className='d-flex'><IoIosLock/>Security</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-notification"}><button className='d-flex' id='button_act'><IoIosNotificationsOutline/>Notifications</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-interface"}><button className='d-flex'><RiComputerLine/>Interface</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><MdOutlineVerifiedUser/>Verification</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-affiliate"}><button className='d-flex'><TbAffiliate/>Affiliate</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><HiOutlineDocumentReport/>Reports</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><SlTrophy/>LeaderBoard</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-api"}><button className='d-flex mb-5'><BiCodeAlt/>API</button></Nav.Link>
      </div>
    </div>
    <div className='col-lg-9'>
    <div id='user_name'>
        <h1>Notifications</h1>
        </div>
    <div className='nav-h1'>
    <Nav.Link as={Link} to={"/user-notification"}><h1>Desktop & In Browser</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-email"}><h1>Emails</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-sound-alert"}><h1>Sound Alerts</h1></Nav.Link>
    </div>
    <hr className='mt-0'></hr>
    <div className='address-book'>
    <h1>Email me when</h1>
      <div id='check_box'>
        <input type="checkbox" name="trading" className='mt-0'></input>
        <label>A withdrawal completes</label><br/>
      </div>
      <div id='check_box'>
        <input type="checkbox" name="trading" className='mt-0'></input>
        <label>A deposite arrives</label><br/>
      </div>
      <div id='check_box'>
        <input type="checkbox" name="trading" className='mt-0'></input>
        <label>A deposite completes</label><br/>
      </div>
      <hr className='mt-3'></hr>
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

export default UserEmail
