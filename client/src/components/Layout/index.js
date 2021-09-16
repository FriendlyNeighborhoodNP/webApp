import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import {
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  MailOutline as MailIcon,
  Menu as MenuIcon,
} from "@material-ui/icons";
import Logo from "../../images/fnnp.svg";
import CoC from "../../images/coc.png";

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding-top: 30px;
  background: var(--yellow);
`;

const Main = styled.main`
  width: 100%;
`;

const FooterSection = styled.div`
  width: 100%;
  background: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Footer = styled.footer`
  width: 100%;
  background: var(--pink);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Heading1 = styled.h2`
  color: var(--pink);
`;

const Heading2 = styled.h1`
  color: var(--navy);
  margin-top: -20px;
`;

const Nav = styled.nav`
  width: 100%;
  background: var(--navy);
  display: flex;
  justify-content: space-around;
  padding: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    top: 0px;
    height: 100%;
    z-index: 10;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
`;

const HamburgerContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 20;
  @media (min-width: 701px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  &:visited {
    color: white;
  }
`;

const Layout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setShowMenu(false);
    }
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth <= 700) setShowMenu(!showMenu);
  };

  return (
    <>
      <Header>
        <HamburgerContainer>
          <MenuIcon
            style={{
              color: showMenu ? "white" : "var(--navy)",
              fontSize: "32pt",
            }}
            onClick={toggleMenu}
          />
        </HamburgerContainer>
        <img
          src={Logo}
          alt="Friendly Neighborhood NP"
          style={{ width: "230px" }}
        />
        <Heading1>Friendly Neighborhood</Heading1>
        <Heading2>Nurse Practitioner</Heading2>
        {showMenu && (
          <Nav>
            <NavLink onClick={toggleMenu} to="/#schedule-section">
              Schedule
            </NavLink>
            <NavLink onClick={toggleMenu} to="/#about-section">
              About
            </NavLink>
            <NavLink onClick={toggleMenu} to="/#services-section">
              Services
            </NavLink>
            <NavLink onClick={toggleMenu} to="/#covid-section">
              COVID-19 Info
            </NavLink>
            <NavLink onClick={toggleMenu} to="/#partnerships-section">
              Partnerships
            </NavLink>
          </Nav>
        )}
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterSection>
          <SocialLink href="https://www.facebook.com/friendlyneighborhoodnp">
            <FacebookIcon style={{ color: "white", fontSize: "64pt" }} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/kate-strickland-fnp-c-23064067/">
            <LinkedInIcon style={{ color: "white", fontSize: "64pt" }} />
          </SocialLink>
          <SocialLink href="mailto:admin@friendlyneighborhoodnp.com">
            <MailIcon style={{ color: "white", fontSize: "64pt" }} />
          </SocialLink>
        </FooterSection>
        <FooterSection>
          <img
            src={CoC}
            alt="Richmond Hill Bryan County Chamber of Commerce Logo"
          />
        </FooterSection>
      </Footer>
    </>
  );
};

export default Layout;
