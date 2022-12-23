import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";

import CryptoNews from '../assets/Crypto-News-Img.jpeg';

export default function NewsFeedComponets() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="gx-5">
        <MDBCol md="6" className="mb-4">
          <MDBRipple
            className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={CryptoNews}
              className="w-100"
              alt="crypto"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
        </MDBCol>
        <MDBCol md="6" className="mb-4">
          <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
            News of the day
          </span>
          <h4>
            <strong style={{color:"white"}}>Facilis consequatur eligendi</strong>
          </h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            consequatur eligendi quisquam doloremque vero ex debitis veritatis
            placeat unde animi laborum sapiente illo possimus, commodi
            dignissimos obcaecati illum maiores corporis.
          </p>
          <MDBBtn style={{backgroundColor:"#020024", padding:"5px 25px",margin:"25px 0 0 0"}}>Read More</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}