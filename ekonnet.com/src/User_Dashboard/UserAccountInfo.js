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
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { Helmet } from 'react-helmet';

const UserAccountInfo = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Account Info</title>
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
    <Nav.Link as={Link} to={"/user-date-and-time"}><h1>Date & Time</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-fees"}><h1>Fees</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-funding"}><h1>Funding</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-account-info"}><h1>Account Info</h1></Nav.Link>
    </div>
    <hr className='mt-0'></hr>
    <div className='address-book'>
    <h1>Crypto Address Configuration</h1>
    <div id='check_box'>
        <input type="checkbox" name="trading" className='mt-0'></input>
        <label>Enable Bitcoin bech32 addresses</label><br/>
    </div>
      <hr className='mt-3'></hr>
    </div>
    <div className='input_box'>
        <label>OTC Nickname</label><br/>
            <input type="text" name="text"></input><br/>
            <br/>
            </div>
            <hr className='mt-0'></hr>
            <div className='input_box'>
        <label>Nickname</label><br/>
            <input type="text" name="text"></input>
            <p className='txt-p'>(please use Pulse Profile to update the nickname)</p>
            </div>
            <div id='check_box'>
        <input type="checkbox" name="trading" className='mt-3'></input>
        <label>Enable account for public leaderboard</label><br/>
        <p className='txt-p'>(a rank number will be allocated if no Nickname is set in the section above)</p>
    </div>
    <div className='address-book'>
    <h1 className='mt-4'>Leaderboard nickname display mode</h1>
    </div>
    <div className='mt-3' id='check_box'>
    <BootstrapSwitchButton checked={true} width={10}/>
    <label>Show Nickname</label>
    <p className='txt-p'>(If enabled, the leaderboard will display the Nickname set above)</p>
    </div>
    <div id='btn_box'>
        <button className='btn btn-primary mb-5'>Save Changes</button>
        </div>
    
  </div>
</div>
      </div>

     </section> 
    </>
  )
}

export default UserAccountInfo
