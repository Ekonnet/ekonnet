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
const UserCreateNewKey = () => {
  return (
    <>
     <Helmet>
        <title>Ekonnet | User Create New Key</title>
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
      <Nav.Link as={Link} to={"/user-notification"}><button className='d-flex'><IoIosNotificationsOutline/>Notifications</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-interface"}><button className='d-flex'><RiComputerLine/>Interface</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><MdOutlineVerifiedUser/>Verification</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-affiliate"}><button className='d-flex'><TbAffiliate/>Affiliate</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><HiOutlineDocumentReport/>Reports</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><SlTrophy/>LeaderBoard</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-api"}><button className='d-flex mb-5' id='button_act'><BiCodeAlt/>API</button></Nav.Link>
      </div>
    </div>
    <div className='col-lg-9'>
    <div id='user_name'>
        <h1>API</h1>
        </div>
    <div className='nav-h1'>
    <Nav.Link as={Link} to={"/user-api"}><h1>Ekonnet APIs</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-my-api-key"}><h1>My API Keys</h1></Nav.Link>
    <Nav.Link as={Link} to={"/user-create-new-key"}><h1>Create New Key</h1></Nav.Link>
    </div>
    <hr className='mt-0'></hr>
    <div className='address-book'>
    <p>API keys grant external applications customised access to your account. API keys can be used to log into your account in the Ekonnet mobile app (via QR code), to set up automated bots which trade on your behalf, or to trade programmatically on Ekonnet.<br/><br/>Please select the permissions you would like to grant through your new API key, then click 'Generate API key' button to generate your keys and a QR code that can be scanned.<br/><br/></p>
    </div>
    <div className='key' >
    <div>
      <h5>Account Info</h5>
      </div>
      <div className='d-flex'>
<div>
      <h6>Get account fee information.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
</div>
</div>
<div className='d-flex'>
      <div>
      <h6>Get account fee information.</h6>
      </div><div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
      </div>  
    </div>
    </div>
    <div className='key'>
      <h5>Account History</h5>
      <div className='d-flex'>
      <div>
      <h6>Get historical balances entries and trade information.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
    </div>
    </div>
    </div>
    <div className='key'>
      <h5>Orders</h5>
      <div className='d-flex'>
      <div>
      <h6>Get orders and statuses.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
      </div>
      </div>
      <div className='d-flex'>
      <div>
      <h6>Create and cancel orders.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
      </div>
    </div>
    </div>
    <div className='key'>
      <h5>Margin Trading</h5>
      <div className='d-flex'>
      <div>
      <h6>Get position and margin info.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
      </div>
      </div>
      <div className='d-flex'>
      <div>
      <h6>Claim a position.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
</div>
    </div>
    </div>
    <div className='key'>
      <h5>Margin Funding</h5>
      <div className='d-flex'>
      <div>
      <h6>Get funding statuses and info.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label>
      </div>
      </div>
      <div className='d-flex'>
      <div>
      <h6>Offer, cancel and close funding.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label> 
      </div>
    </div>
    </div>
    <div className='key'>
      <h5>Wallets</h5>
      <div className='d-flex'>
      <div>
      <h6>Get wallet balances and addresses.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label> 
      </div>
      </div>
      <div className='d-flex'>
      <div>
      <h6>Transfer between your wallets.</h6>
    </div>
    <div>
    <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label> 
    </div>
    </div>
    </div>
    <div className='key'>
      <h5>Withdrawals</h5>
      <div className='d-flex'>
      <div>
      <h6>Create a new withdrawal.</h6>
      </div>
      <div>
      <label class="switch">
  <input type="checkbox"></input>
  <span class="slider round"></span>
</label> 
      </div>
    </div>
    </div>
    <div id='btn_box'>
        <button className='btn btn-primary mb-5'>Generate API Key</button>
        </div>
    </div>
</div>
      </div>
     </section> 
    </>
  )
}

export default UserCreateNewKey
