import React from 'react'
// import background from '../components/assets/pbg.jpg'
import './HelpCenter__main.css';
import { BiSearchAlt2 } from 'react-icons/bi';

const HelpCommonHeader = () => {
    const Background = {
        // backgroundImage: `url(${background})`,
        // height: '40vh',
        // marginTop: '0',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    }

  return (
    <>
     <section className="hepcenter__front" id="common-search-hero" style={Background}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto welcome__main">
                            <h2 className="wellcome__ekonnet">
                                Welcome to the Ekonnet Help Center
                            </h2>
                            <div className="search__form search__icon-div ">
                                    <span><BiSearchAlt2 /></span>
                                    <span> Search</span>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default HelpCommonHeader
