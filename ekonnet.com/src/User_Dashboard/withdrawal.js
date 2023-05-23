import React from "react";
import "./deposite.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Withdrawal = () => {
  return (
    <>
      <section id="deposite" className="deposite">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3">
              <div className="deposite_left-side">
                <button style={{ fontSize: "20px" }}>Wallet</button>
                <Nav.Link as={Link} to={"/"}>
                  <button>Balance</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/deposite"}>
                  <button>Deposite</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/withdrawal"}>
                  <button id="button-act">Withdrawals</button>
                </Nav.Link>
                <Nav.Link as={Link} to={"/"}>
                  <button>Reports</button>
                </Nav.Link>
              </div>
            </div>
            <div className="col-lg-9 deposite-right">
          <div className="depo">
          <h2>New withdrawal</h2>
          <p>You have basic access so you'll need to get verified to make a new withdrawal.</p>
          </div>
          <div className="d-flex">
          <div className="box-1">
          <h3>Cryptocurrency</h3>
          <p>All cryptocurrencies available on Ekonnet.</p>
          </div>
          <div className="box-1">
          <h3>Bank transfer</h3>
          <p>We accept EUR, CNH, JPY, GBP, USD.</p>
          </div>
          </div>
          <div className="d-flex">
          <div className="box-1">
          <h3>Tether tokens</h3>
          <p>We accept USDt, EURt, CNHt, XAUt, MXNt.</p>
          </div>
          <div className="box-1">
          <h3>Lightning Network</h3>
          <p>Create, approve and view withdrawals</p>
          </div>
          </div>
          <div className="recent">
            <h2>Recent withdrawals</h2>
          </div>
          <div className="second-box">
            <p>No recent withdrawals.</p>
          </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Withdrawal;
