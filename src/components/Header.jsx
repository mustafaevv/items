import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import items from "../router";

const HeaderItems = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 25px 0;
`;

const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 32px;
  color: #f1ac02;
  text-decoration: none;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3em;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 18px;
  transition: 0.5s color;

  &:hover {
    color: #f1ac02;
  }
`;

const Header = () => {
  return (
    <HeaderItems>
      <HeaderContent>
        <Logo href="#!">Logo</Logo>
        <List>
          {items.map(({ name, id }, index) => (
            <li key={index}>
              <Link href={id}>{name}</Link>
            </li>
          ))}
        </List>
      </HeaderContent>
    </HeaderItems>
  );
};

export default Header;