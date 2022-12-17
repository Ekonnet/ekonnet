import React from 'react'
import Video from '../assets/Header_Video.mp4';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Swipper from './Swipper';
import './Home.css';
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className='app'>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="text-wrapper">
            <h1>Trade like a legend on the legendary
              crypto exchange</h1>
            <Button size="lg" className='get-start'>Get Start</Button>
          </div>
        </div>
      </section>
      {/* hero section End here */}

      <section className="slider">
        <Container>
        <Swipper/>
        <h2 className='digital-assets'>The home of digital asset trading</h2>
       <div className="login-btn">
        <Button size="lg" className='sign-up'>Sign Up</Button>
        <Button size="lg" className='sign-in'>Sign In</Button>
        </div>
        </Container>

      </section>

 {/* slider section End here */}



    </>
  )
}

export default Home
