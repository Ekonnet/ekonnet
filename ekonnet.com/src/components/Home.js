import React from 'react'
import Video from "../assets/Header_Video.mp4";

const Home = () => {
  return (
    <>
    <section>
    <div className='contaier-fluid'>
<div className='header_video'>
<video src={Video} controls="controls" autoPlay="true" />
</div>

       </div>

    </section>

    </>
  )
}

export default Home
