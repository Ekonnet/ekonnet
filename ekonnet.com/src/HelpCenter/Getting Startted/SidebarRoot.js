import React from 'react'
import WhatIsEkonnet from '../Getting Startted/WhatIsEkonnet';
import AcountCreate from '../Getting Startted/AcountCreate';
import HowToEarn from '../Getting Startted/HowToEarn';
import BeginnersGuide from '../Getting Startted/BeginnersGuide';
import HowToUse from '../Getting Startted/HowToUse';
import HowToDeposite from '../Getting Startted/HowToDeposite';
import HowToWithdrawal from '../Getting Startted/HowToWithdrawal';
import {Route,Routes} from "react-router-dom";
import Sidebar from './Sidebar';

const SidebarRoot = () => {

  return (
   <>
   <Sidebar>
   <Routes>
       <Route path='/what-is-ekonnet' element={<WhatIsEkonnet/>}/>  
       <Route path='/acount-create' element={<AcountCreate/>}/>
       <Route path='/how-to-earn' element={<HowToEarn/>}/>
       <Route path='/how-to-use' element={<HowToUse/>}/>
       <Route path='/beginners-guide' element={<BeginnersGuide/>}/>
       <Route path='/how-to-deposite' element={<HowToDeposite/>}/>
       <Route path='/how-to-withdrawal' element={<HowToWithdrawal/>}/>
       </Routes>
       </Sidebar>
   
   </>
  )
}

export default SidebarRoot
