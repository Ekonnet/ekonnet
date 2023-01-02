import React from 'react'
import { NavLink } from 'react-router-dom'
import '../HelpCenter__main.css'
import {motion} from 'framer-motion'


import HelpCommonHeader from '../HelpCommonHeader'

 const Sidebar = ({children}) => {
  
  const MenuItem = [
    {
      path:"/what-is-ekonnet",
      name:"What is Ekonnet"
    },
    {
      path:"/acount-create",
      name:"How to create an account on Ekonnet"
    },
    {
      path:"/beginners-guide",
      name:"A Beginner's guide to Ekonnet"
    },
    {
      path:"/how-to-earn",
      name:"How to earn on Ekonnet without trading"
    },
    {
      path:"/how-to-use",
      name:"Tutorial: How to use Ekonnet"
    },
    {
      path:"/how-to-deposite",
      name:"How to make a deposit at Ekonnet"
    },
    {
      path:"/how-to-withdrawal",
      name:"How to make a crypto withdrawal at Ekonnet"
    }
  ]
  return (
    <>
    <HelpCommonHeader/>
    <section className="sidebar__section">
    <div className="container sidebar__container flex">
      <motion.div animate={{width:"400px"}} className="sidebar-div mt-10">
        <div className="top__section flex items-center px-20px py-20px text-xs">
          <h5 className='article__section'>Articles in this section</h5>
        </div>
        
        {MenuItem.map((item,index)=>(
          <NavLink to={item.path} key={index} className="link flex  mt-2 pb-3 align-center  no-underline" activeclassName="active">
            <div className="link_text">
                 {item.name}
            </div>
          </NavLink>
        ))
        }
      </motion.div>

      <main className='main-data'>{children}</main>
    
     
       
     
    </div>
    </section>
   
    </>
  )
}

export default Sidebar
