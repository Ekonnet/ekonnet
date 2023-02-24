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

const UserFees = () => {
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
      <Nav.Link as={Link} to={"/user-security"}><button className='d-flex'><IoIosLock/>Security</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-notification"}><button className='d-flex'><IoIosNotificationsOutline/>Notifications</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-interface"}><button className='d-flex'><RiComputerLine/>Interface</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><MdOutlineVerifiedUser/>Verification</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><TbAffiliate/>Affiliate</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><HiOutlineDocumentReport/>Reports</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><SlTrophy/>LeaderBoard</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-api"}><button className='d-flex'><BiCodeAlt/>API</button></Nav.Link>
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
    <h1>Default currency for fees</h1>
    <p>Your default currency to deduct fees from(for margin trading, and exchange depending on Exchange fee setting)</p>
    <div id='check_box'>
        <input type="radio" name="trading" className='mt-0'></input>
        <label>BTC</label><br/>
            <input type="radio" name="trading" className='mt-0'></input>
        <label>USD</label><br/>
        </div>
    </div>
    <hr className='mt-2'></hr>
    <div className='address-book'>
    <h1>Fee type for Exchange orders </h1>
    <p>This setting concerns Exchange orders. However,please note that if your account does not hold sufficient balance in the fee currency the platform will automatically apply the fee to the first available balance.</p>
    <div id='check_box'>
        <input type="radio" name="trading" className='mt-0'></input>
        <label>Currency Exchange Fee</label><br/>
        <p>Fees will be taken in the currency you receive(BTC If you buy BTC/USD or USD if you sell BTC/USD for example).</p>
            <input type="radio" name="trading" className='mt-0'></input>
        <label>Asset trading Fee</label><br/>
        <p>Fees will be taken in the default currency set above.</p>
        </div>
        <div id='btn_box'>
        <button className='btn btn-primary'>Save Changes</button>
        </div>
    </div>
    </div>
</div>
      </div>
     </section> 
    </>
  )
}

export default UserFees
