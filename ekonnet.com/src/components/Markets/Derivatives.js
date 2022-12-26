import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SpotImg from '../assets/SpotDummyImg.png';

const Derivatives = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <div className="1st">
                            <h3 className="top-gainers">Top Gainers</h3>
                            <col><h4 className="pair">Pair</h4>
                                <p>AXY/USDT</p>
                                <p>WEB/USDT</p>
                                <p>PLY/USDT</p>
                            </col>
                            <col><h4 className="price">Price</h4>
                                <p>0.0222</p>
                                <p>0.5508</p>
                                <p>0.000549</p>
                            </col>
                            <col><h4 className="24h-change">
                                <p>34.99%</p>
                                <p>29.97%</p>
                                <p>25.34%</p></h4>
                            </col>
                        </div>
                    </Col>
                    <Col>
                    <div className="2nd">
                            <h3 className="Tranding">LeaderBoard</h3>
                            <col><h4 className="pair">Pair</h4>
                                <p>xyz@gmail.com</p>
                                <p>xyz@gmail.com</p>
                                <p>xyz@gmail.com</p>
                            </col>
                            <col><h4 className="p&l">p&L</h4>
                                <p>0.0222</p>
                                <p>0.5508</p>
                                <p>0.000549</p>
                            </col>
                        
                        </div>
                    </Col>
                    <Col>
                    <div className="3rd">
                            <h3 className="Tranding">Top Gainers</h3>
                            <col><h4 className="pair">Pair</h4>
                                <p>AXY/USDT</p>
                                <p>WEB/USDT</p>
                                <p>PLY/USDT</p>
                            </col>
                            <col><h4 className="price">Price</h4>
                                <p>0.0222</p>
                                <p>0.5508</p>
                                <p>0.000549</p>
                            </col>
                            <col><h4 className="24h-change">
                                <p>34.99%</p>
                                <p>29.97%</p>
                                <p>-25.34%</p></h4>
                            </col>
                        </div>
                    </Col>
                </Row>
                <img src={SpotImg} alt='spotimg'/>



            </Container>

        </>
    )
}

export default Derivatives