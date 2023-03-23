import * as React from 'react';
import { useState, useEffect } from 'react';
import MarketCarousel from '../OwlCarousel/MarketCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Market.css'
import { Link } from "react-router-dom";
import BoxDiv from '../OwlCarousel/BoxDiv';
import NewsFeedComponets from '../Markets/NewsFeedComponets';
import Nav from 'react-bootstrap/Nav';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi'
import { FiArrowDownLeft } from 'react-icons/fi'
export default function MarketOverview() {

  const [data, setData] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <>
      <Helmet>
        <title>Ekonnet | Market Overview</title>
      </Helmet>
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
          </Row>


          <div className='main-container'>
            {data.map((item, index) => (
              <div key={index} className="Main-box">
                <div className="Main-card">
                  <div className="Main-card-content">
                    <div className="Main-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="check-icon">
                      <BsFillBookmarkCheckFill />
                    </div>
                    <div className="CoinDetails">

                      <span className="Coin-name">{item.name}</span>


                      {item.price_change_percentage_24h < 0 ? (
                        <span className="Coin-symbol-red">{item.symbol}</span>
                      ) : (
                        <span className="Coin-symbol-green">{item.symbol}</span>
                      )}

                      <span className="price">${item.current_price.toLocaleString()}</span>

                      {item.price_change_percentage_24h < 0 ? (

                        <span className="highlited-price-Red">
                          <FiArrowDownLeft />
                          {item.price_change_percentage_24h.toFixed(2)}%</span>

                      ) : (
                        <span className="highlited-price-Green">
                          <FiArrowUpRight />
                          {item.price_change_percentage_24h.toFixed(2)}%</span>
                      )}
                      <span className="highlited-price">{item.percent_change}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


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