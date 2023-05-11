import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Protected = (props) => {
    const navigate =useNavigate('')
    const {Cmp} =props;
    useEffect(()=>{
        let login =localStorage.getItem('login')
        if(!login){
            navigate('/sign-up')
        }
        // else{
        //     navigate('/authentication')
        // }
    })
  return (
    <>
 <Cmp/>
    </>
  )
}

export default Protected