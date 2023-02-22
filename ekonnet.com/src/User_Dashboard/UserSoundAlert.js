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

const UserSoundAlert = () => {
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
      <Nav.Link as={Link} to={""}><button className='d-flex'><IoIosLock/>Security</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-notification"}><button className='d-flex' id='button_act'><IoIosNotificationsOutline/>Notifications</button></Nav.Link>
      <Nav.Link as={Link} to={"/user-interface"}><button className='d-flex'><RiComputerLine/>Interface</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><MdOutlineVerifiedUser/>Verification</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><TbAffiliate/>Affiliate</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><HiOutlineDocumentReport/>Reports</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><SlTrophy/>LeaderBoard</button></Nav.Link>
      <Nav.Link as={Link} to={""}><button className='d-flex'><BiCodeAlt/>API</button></Nav.Link>
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
    <div className='sound_box'>
        <label>Play an audio cue when one of your orders is fully executed.</label><br/>
        <div className='d-flex'>
          <div>
            <input list="sound" name="text" className='mt-2' placeholder='None'></input>
           <datalist id="sound">
  <option value="None"/>
  <option value="Tone"/>
  <option value="Wob"/>
  <option value="Triple Chime"/>
  <option value="Triple Beep"/>
  <option value="Double Tap"/>
  <option value="Ping Up"/>
  <option value="Ping Down"/>
         </datalist>
         </div>
         <div className='sound-icon'>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
  <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
</svg>
</div>
</div>
         </div> 
            <br/>  <br/>
    <div className='sound_box'>
        <label>Play an audio cue when one of your orders is partially executed.</label><br/>
        <div className='d-flex'>
          <div>
            <input list="sound" name="text" className='mt-2' placeholder='None'></input>
           <datalist id="sound">
  <option value="None"/>
  <option value="Tone"/>
  <option value="Wob"/>
  <option value="Triple Chime"/>
  <option value="Triple Beep"/>
  <option value="Double Tap"/>
  <option value="Ping Up"/>
  <option value="Ping Down"/>
         </datalist>
         </div>
         <div className='sound-icon'>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
  <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
</svg>
         </div>
            </div>
            </div>
            <br/><br/>
           
    <div className='sound_box'>
        <label>Play an audio cue on every public trade. The sound will only play if you are on the Exchange or Margin Trading page and if the trade is for the pair you are currently viewing.<br/>(eg. A LTC/USD trade will not trigger the sound if you are on /t/BTC:USD)</label><br/>
        <div className='d-flex'>
          <div>
            <input list="sound" name="text" className='mt-2' placeholder='None'></input>
           <datalist id="sound">
  <option value="None"/>
  <option value="Tone"/>
  <option value="Wob"/>
  <option value="Triple Chime"/>
  <option value="Triple Beep"/>
  <option value="Double Tap"/>
  <option value="Ping Up"/>
  <option value="Ping Down"/>
         </datalist>
         </div>
         <div className='sound-icon'>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
  <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
</svg>
         </div>
</div>
            </div>
            <br/><br/>
            <div className='sound_box'>
        <label>Play an audio cue when price alerts are triggered<br/>(You can quickly set price alerts by clicking directly in the order book. When you hover over a row in the order book on the Trading page, a bell icon will apear at the outer edge of the row. Click the bell icon to toggle a price alert at that price point.)</label><br/>
          <div className='d-flex'>
          <div>
              <input list="sound" name="text" className='mt-2' placeholder='None'></input>
           <datalist id="sound">
  <option value="None"/>
  <option value="Tone"/>
  <option value="Wob"/>
  <option value="Triple Chime"/>
  <option value="Triple Beep"/>
  <option value="Double Tap"/>
  <option value="Ping Up"/>
  <option value="Ping Down"/>
         </datalist>
         </div>
         <div className='sound-icon'>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
  <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
</svg>
         </div>
         </div>
            </div>
            <br/><br/>
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

export default UserSoundAlert
