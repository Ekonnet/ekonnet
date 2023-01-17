import * as React from 'react';
import MarketCarousel from '../OwlCarousel/MarketCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Market.css'
import { Link } from "react-router-dom";
import BoxDiv from '../OwlCarousel/BoxDiv';
import NewsFeedComponets from '../Markets/NewsFeedComponets';
import Nav from 'react-bootstrap/Nav';


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
              <div className='d-flex justify-content-start'>

                <Nav.Link as={Link} to={"/market-overview"}><button className='market-nav'>Favorites</button></Nav.Link>
                <Nav.Link as={Link} to={"/spot"} ><button className='market-nav'>Spot </button></Nav.Link>
                <Nav.Link as={Link} to={"/darivatives"}> <button className='market-nav'>Darivatives</button></Nav.Link>
              </div>

            </Col>
            {/* <TabsDatavalues/> */}
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

        </Container>
      </section>


      <section className='Market-news-section'>
        <Container>
          <Row>
            <h2 className='new-listing-heading'>News</h2>
            <NewsFeedComponets />



          </Row>
        </Container>
      </section>

    </>
  );
}