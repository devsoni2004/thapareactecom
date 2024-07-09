import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="../images/glow.png" alt="my logo img"className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background:radial-gradient(circle,rgba(55,46,61,1) 21%,rgba(3,1,1,1) 43%,rgba(184,151,106,1) 83%,rgba(0,0,0,1) 94%); ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  

  .logo {
    // height: 30%;
    width: 20%;
  }
  
`;
export default Header;
