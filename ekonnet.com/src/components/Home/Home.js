import React from 'react'
import Video from '../assets/Header_Video.mp4';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
   <section>
      <div className='app'>
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="text-wrapper">
          <h1>Trade like a legend on the legendary <br/>
            crypto exchange</h1>  
        </div>
      </div>
      <Button  size="lg" className='get-start'>Get Start</Button>
      </section>

    </>
  )
}

export default Home
