import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { LogoutUrl } from "../Constants/UrlConstants";
import axios from "axios";

function HeaderNav() {
  const auth = localStorage.getItem("result");
  const user = localStorage.getItem("name");

  const navigate = useNavigate();
  const logout = () => {
    const token = localStorage.getItem("token");
    axios
      .get(LogoutUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.clear();
        navigate("/sign-up");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {auth ? (
        <Navbar className="navbg" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to={"/"} className="logo">
              Ekonnet
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-white text-black"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto main-nav">
                <Nav.Link as={Link} to={"/user-dashboard-home"}>
                  Trading
                </Nav.Link>
                <Nav.Link as={Link} to={"/user-derivatives-home"}>
                  Derivatives
                </Nav.Link>
                <NavDropdown
                  title="Funding"
                  id="basic-nav-dropdown"
                  className="toggle-side"
                >
                  <NavDropdown.Item as={Link} to={"/user-funding-home"}>
                    Funding
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/user-lending-home"}>
                    Lending Pro
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"user-otc-home"}>
                  OTC
                </Nav.Link>
                <NavDropdown
                  title="More"
                  id="basic-nav-dropdown"
                  className="toggle-side"
                >
                  <NavDropdown.Item as={Link} to={"/affiliate"}>
                    Affiliate Program
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/ekonnet-pay"}>
                    Ekonnet Pay
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/ekonnet-terminal"}>
                    Ekonnet Terminal
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/staking"}>
                    Staking Rewards
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/user-lending-product-home"}>
                    Lending Products
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <NavDropdown
                  title="Wallet"
                  id="basic-nav-dropdown"
                  className="toggle-side"
                >
                  <NavDropdown.Item as={Link} to={"/deposite"}>
                    Deposite
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/withdrawal"}>
                    Withdraw
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={""}>
                    Wallets
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={""}>
                    Report
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={""} className="hide">
                  <BiSearch />
                </Nav.Link>
                <Nav.Link as={Link} to={""} className="hide">
                  <IoIosNotificationsOutline />{" "}
                </Nav.Link>
                <NavDropdown
                  title={user}
                  id="basic-nav-dropdown"
                  className="hide"
                >
                  <NavDropdown.Item as={Link} to={"/user-account"}>
                    UserAccount
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/user-sub-account"}>
                    Sub-Accounts
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/user-security-account"}>
                    Security Accounts
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/user-security"}>
                    Security
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/user-notification"}>
                    Notifications
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/user-interface"}>
                    Interface
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={""}>
                    Verification
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/user-affiliate"}>
                    Affiliate
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={""}>
                    Reports
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={""}>
                    Leaderboard
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/user-api"}>
                    API Keys
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={""}>
                    Announcements
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} onClick={logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar className="navbg" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand as={Link} to={"/"} className="logo">
              Ekonnet
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="bg-white text-black"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto main-nav">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <NavDropdown title="Buy Crypto" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/one-click-buy"}>
                    One-Click Buy
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/p2p-trading-Fees"}>
                    P2P Trading(0 Fees)
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/fiat-deposite"}>
                    Fiat Deposite
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/market-overview"}>
                  Market Overview
                </Nav.Link>
                <Nav.Link as={Link} to={"/future"}>
                  Future
                </Nav.Link>
                <NavDropdown title="Traders" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/features"}>
                    Features
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/mobile-app"}>
                    Mobile App
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/security-protection"}>
                    Security & Protection
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/wallet"}>
                    Wallet
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/affiliate"}>
                  Affiliate
                </Nav.Link>
                <Nav.Link as={Link} to={"/about-us"}>
                  About Us
                </Nav.Link>
              </Nav>
              <Nav.Link
                className="btn nav-btn"
                style={{ padding: "5px 10px" }}
                as={Link}
                to={"/sign-up"}
              >
                Sign Up
              </Nav.Link>
              <Nav.Link
                className="btn nav-btn"
                style={{ padding: "5px 10px" }}
                as={Link}
                to={"/sign-in"}
              >
                Sign In
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default HeaderNav;
