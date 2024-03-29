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

const UserSubAccount = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Sub Account</title>
      </Helmet>
    <section id ="account" className='account'>
      <div className='container'>
      <div className='row'>
      <div className='col-lg-3'>
      <div className='account_button'>
      <Nav.Link as={Link} to={"/user-account"}><button className='d-flex' ><RiUser3Line/>Account</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-sub-account"}><button className='d-flex' id='button_act'><MdOutlineSwitchAccount/>Sub-Account</button></Nav.Link>
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
      <div id='user_name'>
        <h1>Sub-Accounts</h1>
        <span>Username:</span>
        <hr></hr>
        <h6>Create a new sub-account</h6>
        <div className='input_box'>
        <label>Email</label><br/>
            <input type="email" name="email"></input><br/>
        <label>Username</label><br/>
            <input type="text" name="name"></input><br/>
        <label>Password</label><br/>
            <input type="text" name="password"></input><br/>
        <label>Password Confirmation</label><br/>
            <input type="text" name="password"></input><br/>
            </div>
       <div id='check_box'>
        <input type="checkbox" name="trading"></input>
        <label>Paper Trading Account</label><br/>
            <input type="checkbox" name="trading"></input>
        <label>Trading Competition Account</label><br/>
            <input type="checkbox" name="trading"></input>
        <label>Merchant Account</label><br/>
        <div id='btn_box'>
        <button className='btn btn-primary mb-5'>Create</button>
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

export default UserSubAccount
