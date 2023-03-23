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

const UserAccount = () => {
  const user = localStorage.getItem('name');
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Account</title>
      </Helmet>
     <section id ="account" className='account'>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-3'>
      <div className='account_button'>
      <Nav.Link as={Link} to={"/user-account"}><button className='d-flex' id='button_act'><RiUser3Line/>Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-sub-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Sub-Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-security-account"}><button className='d-flex'><MdOutlineSwitchAccount/>Securities-Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-security"}><button className='d-flex'><IoIosLock/>Security</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-notification"}><button className='d-flex'><IoIosNotificationsOutline/>Notifications</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-interface"}><button className='d-flex'><RiComputerLine/>Interface</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><MdOutlineVerifiedUser/>Verification</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-affiliate"}><button className='d-flex'><TbAffiliate/>Affiliate</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><HiOutlineDocumentReport/>Reports</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><SlTrophy/>LeaderBoard</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-api"}><button className='d-flex mb-5'><BiCodeAlt/>API</button></Nav.Link>
      </div>
    </div>
    <div className='col-lg-9'>
    <div className='nav-h1'>
    <Nav.Link as={Link} to={"/user-account"}><h1>Account</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-address-book"}><h1>Address Book</h1></Nav.Link>
    <Nav.Link as={Link} to={"user-date-and-time"}><h1>Date & Time</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-fees"}><h1>Fees</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-funding"}><h1>Funding</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-account-info"}><h1>Account Info</h1></Nav.Link>
    </div>
    <hr className='mt-0'></hr>
    <div>
    <div className='d-flex'>
    <div className='col-lg-3 user-details'>
    <div>
    <h4>USERNAME</h4>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
    <h5>{user}</h5>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
      <h6>CHANGE</h6>
    </div>
    </div>
    </div>
    <hr></hr>
    <div className='d-flex'>
    <div className='col-lg-3 user-details'>
    <div>
    <h4>PASSWORD</h4>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
    <h5>Xyz@123</h5>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
      <h6>CHANGE</h6>
    </div>
    </div>
    </div>
    <hr></hr>
    <div className='d-flex'>
    <div className='col-lg-3 user-details'>
    <div>
    <h4>EMAIL</h4>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
    <h5>xyz@gmail.com</h5>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
      <h6>CHANGE</h6>
    </div>
    </div>
    </div>
    <hr></hr>
    <div className='d-flex'>
    <div className='col-lg-3 user-details'>
    <div>
    <h4>LANGUAGE</h4>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
    <h5>English</h5>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
      <h6>ENGLISH</h6>
    </div>
    </div>
    </div>
    <hr></hr>
    <div className='d-flex'>
    <div className='col-lg-3 user-details'>
    <div>
    <h4>STATUS</h4>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
    <h5>Active</h5>
    </div>
    </div>
    <div className='col-lg-3 user-details'>
    <div>
      <h6>DEACTIVATE</h6>
    </div>
    </div>
    </div>
    <hr></hr>
    </div>
      </div>
</div>
      </div>
     </section> 
    </>
  )
}

export default UserAccount
