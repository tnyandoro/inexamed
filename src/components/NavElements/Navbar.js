import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../assets/inexamed-logo.PNG';

function NavBar() {
  return (
    <Nav>
      <Logo href="">
        <img src={MainLogo} alt="Inexamed logo" width={100} height={100} />
      </Logo>
      <Menu>
        <MenuLink href="">Drug Interactions</MenuLink>
        <MenuLink href="">Interaction List</MenuLink>
        <MenuLink href="">Pregnancy List</MenuLink>
        <MenuLink href="">Patient Registration</MenuLink>
        <MenuLink href="">Add Interactions</MenuLink>
        <MenuLink href="">References</MenuLink>
      </Menu>
    </Nav>

  );
}

const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    background : grey;
`;
const Logo = styled.a`

`;
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100px;
    }
`;
const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    color: rgb(83, 58, 99);
    font-weight: bold;
    transition: all 0.5s ease-in;
    
    &:hover {
        color: #fff;  
    }
`;

export default NavBar;
