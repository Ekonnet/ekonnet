import * as React from 'react';
import MarketCarousel from '../OwlCarousel/MarketCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Market.css'
import { NavLink } from 'react-router-dom';
import BoxDiv from '../OwlCarousel/BoxDiv';
import NewsFeedComponets from '../Markets/NewsFeedComponets';
// import Col from 'react-bootstrap/Col';
// import { Link } from "react-router-dom";

// import styled from 'styled-components'

export default function MarketOverview() {


  return (
    <>
      <section className='Market-section'>
        <Container>
          <Row>
            <h2 className='new-listing-heading'>New Listing</h2>
            <Col><MarketCarousel /></Col>


          </Row>
        </Container>
      </section>

      <section className='Market-fav-section'>
        <Container>
          <Row>
            <h2 className='new-listing-heading'>Markets</h2>
          </Row>
          <Row>
            <Col>
              <div className='d-flex justify-content-start gap-3'>
                <NavLink><h3 className='market-nav'>Favorites</h3></NavLink>
                <NavLink> <h3 className='market-nav'>Spot </h3></NavLink>
                <NavLink> <h3 className='market-nav'>Darivatives</h3></NavLink>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <BoxDiv />
            </Col>
            <Col>
              <BoxDiv />
            </Col>
            <Col>
              <BoxDiv />
            </Col>
            <Col>
              <BoxDiv />
            </Col>

          </Row>
          <Row>
            <Col>
              <BoxDiv />
            </Col>
            <Col>
              <BoxDiv />
            </Col>
            <Col>
              <BoxDiv />
            </Col>
            <Col>
              <BoxDiv />
            </Col>
          </Row>
                          <div className='mt-5 d-flex justify-content-center'>
                         <NavLink><h3 className='market-nav'>Add To Favorite</h3></NavLink>
                         </div>
        </Container>
      </section>


      <section className='Market-news-section'>
        <Container>
          <Row>
            <h2 className='new-listing-heading'>News</h2>
 <NewsFeedComponets/>



          </Row>
        </Container>
      </section>

    </>
  );
}