import React from 'react'
import './Tokendeposite.css'
import {BiChevronRight} from 'react-icons/bi'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const TokenDeposite = () => {
  return (
    <>
      <section id='token-deposite' className='token-deposite'>
      <div className='container'>
     <div className='row'>
     <div className='d-flex'>
     <div className='col-lg-2'></div>
     <div className='col-lg-8'>
     <div className='token d-flex'>
     <div>
     <Nav.Link as={Link} to={"/frequently-asked-question"}><h2>Home</h2></Nav.Link>
     </div>
     <div>
     <BiChevronRight/>
     </div>
     <div>
        <h3>Token Deposits</h3>
     </div>
     </div>
     <form>
     <div className='token-input'>
     <label className='required'>Please select your issue below</label><br/>
        <input list='issue' type="text" name="text" placeholder='Select...' className='mt-1'></input>  
        <datalist id="issue">
       <option value="Forgot to or inserted the wrong Tag, Memo, or Payment ID"/>
       <option value="Deposit of wrong tokens"/>
       <option value="Deposit Missing"/>
       <option value="Other issue"/>
       </datalist> 
     </div>
     <div className='token-input'>
     <label className='required mt-5'>Token</label><br/>
        <input list='issuee' type="text" name="text"  className='mt-1'></input>  
        <datalist id="issuee">
       <option value="Other Token"/>
       <option value="1INCH"/>
       <option value="AAVE"/>
       <option value="Cardano ADA"/>
       <option value="Multiverse (AI)"/>
       <option value="AliianceBlock"/>
       <option value="Algorand"/>
       <option value="Ampleforth"/>
       <option value="Anchor"/>
       <option value="Aragon"/>
       <option value="ApeCoin"/>
       <option value="APENFT"/>
       <option value="Aptos"/>
       <option value="ATLAS"/>
       <option value="Cosmos-Atom"/>
       <option value="Avalanche"/>
       <option value="Axie Infinity"/>
       <option value="Bit2Me"/>
       <option value="Balancer"/>
       <option value="Band"/>
       <option value="Basic Attention Token"/>
       <option value="Bitcoin Cash"/>
       <option value="XEC"/>
       <option value="Bitcoin Cash"/>
       <option value="Bitpanda"/>
       <option value="BFX Token"/>
       <option value="BLUR"/>
       <option value="Bancor"/>
       <option value="BOBA"/>
       <option value="BOO"/>
       <option value="Boson Token"/>
       <option value="Bitcoin"/>
       <option value="Bitcoin Gold"/>
       <option value="BTSE"/>
       <option value="BitTorrent"/>
       <option value="Concordium"/>
       <option value="CHEX"/>
       <option value="Swiss Franc"/>
       <option value="SwissBorg"/>
       <option value="socios.com Chiliz"/>
       <option value="Callisto"/>
       <option value="Tether CNHt"/>
       <option value="Compound"/>
       <option value="Convergence"/>
       <option value="Curve"/>
       <option value="Dai Stablecoin"/>
       <option value="Digibyte"/>
       <option value="DOGE"/>
       <option value="Dora"/>
       <option value="Polkadot"/>
       <option value="Dash"/>
       <option value="Dusk Network"/>
       <option value="Deversifi Token"/>
       <option value="pNetwork"/>
       <option value="Elrond"/>
       <option value="Enjin"/>
       <option value="EOS"/>
       <option value="Ethereum Classic"/>
       <option value="Ethereum"/>
       <option value="ETHS"/>
       <option value="ETHW"/>
       <option value="ETP"/>
       <option value="EURt (ETH)"/>
       <option value="Euro"/>
       <option value="EURS"/>
       <option value="Tether EURt"/>
       <option value="E-RADIX"/>
       <option value="Fenerbahce Token"/>
       <option value="Fractal"/>
       <option value="Fetch.AI"/>
       <option value="Filecoin"/>
       <option value="Flare"/>
       <option value="FORTH"/>
       <option value="Fantom"/>
       <option value="FunFair"/>
       <option value="Gala"/>
       <option value="Pound Sterling"/>
       <option value="Gnosis"/>
       <option value="Golem"/>
       <option value="The Graph"/>
       <option value="Gate.IO"/>
       <option value="Gem Exchange and Trading"/>
       <option value="Hector Network"/>
       <option value="Hi Dollar"/>
       <option value="Hong Kong Dollar"/>
       <option value="Human"/>
       <option value="Human (Polygon)"/>
       <option value="Huobi Token"/>
       <option value="ICE"/>
       <option value="Dfinity"/>
       <option value="Everest (ID)"/>
       <option value="Iota"/>
       <option value="Everipedia"/>
       <option value="Jasmy"/>
       <option value="Japanese Yen"/>
       <option value="JST"/>
       <option value="KardiaChain"/>
       <option value="BitKan"/>
       <option value="Kyber"/>
       <option value="Kusama"/>
       <option value="Bitcoin(Liquid)"/>
       <option value="Unus Sed LEO"/>
       <option value="Unus Sed LEO(EOS)"/>
       <option value="Unus Sed LEO(ERC20)"/>
       <option value="ChainLink"/>
       <option value="Bitcoin (Lightning Network)"/>
       <option value="Loopring"/>
       <option value="Litecoin"/>
       <option value="Luna Classic"/>
       <option value="LUNA2"/>
       <option value="LUXOchain"/>
       <option value="Lympo"/>
       <option value="MATIC (Ethereum)"/>
       <option value="MATIC Internet Money"/>
       <option value="Mirror Protocol"/>
       <option value="Maker"/>
       <option value="Melon"/>
       <option value="Decentraland"/>
       <option value="Mobilecoin"/>
       <option value="MXNt"/>
       <option value="MXNt (ETH)"/>
       <option value="Near"/>
       <option value="NEO"/>
       <option value="NEOGAS"/>
       <option value="NEXo"/>
       <option value="OCEAN protocol"/>
       <option value="Origin Protocol"/>
       <option value="OmiseGO"/>
       <option value="Omni"/>
       <option value="Harmony ONE"/>
       <option value="Oxygen"/>
       <option value="Blockpass"/>
       <option value="Paxos"/>
       <option value="PLANETS"/>
       <option value="Pluton"/>
       <option value="Kleros"/>
       <option value="Polacity"/>
       <option value="POLIS"/>
       <option value="QRDO"/>
       <option value="Quantfury"/>
       <option value="Qtum"/>
       <option value="RBTC"/>
       <option value="REEF"/>
       <option value="Augur"/>
       <option value="Request Network"/>
       <option value="Rally"/>
       <option value="Oasis(Rose)"/>
       <option value="Recovery Right Tokens"/>
       <option value="SAND"/>
       <option value="SENATE"/>
       <option value="Songbird"/>
       <option value="Shyft (Ethereum)"/>
       <option value="Shyft(Mainnet)"/>
       <option value="SHIB"/>
       <option value="SIDUS"/>
       <option value="Shimmer"/>
       <option value="Status"/>
       <option value="Synthetix Network"/>
       <option value="Solana"/>
       <option value="SPELL"/>
       <option value="Stargate Finance"/>
       <option value="Storj"/>
       <option value="SUKU"/>
       <option value="SUN"/>
       <option value="SUSHI"/>
       <option value="Sweat Economy"/>
       <option value="SX Network"/>
       <option value="TerreUSD Classic"/>
       <option value="Theta"/>
       <option value="TELOS"/>
       <option value="Polytrade"/>
       <option value="TREEB"/>
       <option value="TRON"/>
       <option value="Turkish Lira"/>
       <option value="USDc"/>
       <option value="Uniswap"/>
       <option value="Ultra"/>
       <option value="US Dollar"/>
       <option value="USDt (Algorand)"/>
       <option value="USDt (AVAX-C)"/>
       <option value="USDTKSM"/>
       <option value="USDt (SOL)"/>
       <option value="USDt (ETH)"/>
       <option value="USDt (Omni)"/>
       <option value="USDt (EOS)"/>
       <option value="Tether USDt"/>
       <option value="USDt (Tron)"/>
       <option value="UTRUST"/>
       <option value="BLOCKv"/>
       <option value="VELO"/>
       <option value="VeChain"/>
       <option value="Verasity"/>
       <option value="v systems"/>
       <option value="WAVES"/>
       <option value="WAX"/>
       <option value="Wrapped Bitcoin"/>
       </datalist> 
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Amount</label><br/>
        <input type="text" name="text" placeholder='Input the nominal amount of transaction in the relevent cryptocurrency' className='mt-1'></input>  
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Transaction ID</label><br/>
        <input type="text" name="text" placeholder='Enter your transaction Id' className='mt-1'></input>  
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Deposit Address</label><br/>
        <input type="text" name="text" placeholder='Input the token-specific transaction address' className='mt-1'></input>  
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Payment ID/Tag/Memo</label><br/>
        <input type="text" name="text" placeholder='If appropriate, input the relevant Payment ID/Tag or Memo' className='mt-1'></input>  
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Deposit ID</label><br/>
        <input type="text" name="text" placeholder='Enter your deposite ID' className='mt-1'></input>  
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Subject</label><br/>
        <input type="text" name="text" placeholder='' className='mt-1'></input>  
     </div>
     <div className='token-input'>
     <label className='required mt-3'>Describe your issue</label><br/>
        <textarea id="text" name="text" rows="4" cols="50" className='mt-1' placeholder ='Let us know what your issue is. Specific details will expedite the resolution of your request'></textarea>
     </div>
     <div className='token-input-s'>
     <label className='required mt-3'>Attachments</label><br/>
        <input type="file" name="text" placeholder='' className='mt-1' style={{}}></input> 
        <span>Please upload your image file here</span>
        <hr style={{marginTop: "60px", color: "darkblue"}}></hr>
     </div>
     <div className='bottom-sec'>
     <div className='d-flex'>
      <div className='col-lg-4'>
        <p>As you are not currently logged in, please identify yourself or<Nav.Link as={Link} to={"/sign-in"}><strong>Log In</strong></Nav.Link></p>
      </div>
      <div className='col-lg-4'>
      <div className='token-input-bottom'>
     <label className='required mt-3'>Email</label><br/>
        <input type="text" name="text" placeholder='Email' className='mt-1'></input>  
     </div>
     <div className='token-input-bottom'>
     <label className='required mt-3'>Name</label><br/>
        <input type="text" name="text" placeholder='Name' className='mt-1'></input>  
     </div>
      </div>
     </div>
     <div className='text-center captcha'>
      <p>Fill in all required fields to submit your ticket</p>
      </div>
      <div className='justify-content-center align-item-center text-center'>
        <button className='btn btn-primary'>Submit</button>
      </div>
     </div>
     </form>
     </div>
     <div className='col-lg-2'></div>
     </div>
      </div>
     </div>
      </section>
    </>
  )
}

export default TokenDeposite
