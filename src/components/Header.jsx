import React, { useState } from "react";
import styled from "styled-components";
import { Cross as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { AiOutlineClose } from "react-icons/ai";

import Container from "../layout/Container";
import items from "../router";
import MenuBar from "./MenuBar";

const HeaderItems = styled.header`
  position: absolute;
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

  @media (max-width: 992px) {
    display: none;
  }
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

const Btn = styled.div`
  z-index: 8888888;
  display: none;
  border: none;
  background: none;
  font-size: 24px;
  color: #f1ac02;

  @media (max-width: 992px) {
    display: block;
  }
`;

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClickActive = () => setIsActive((state) => !state);

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
        <MenuBar isActive={isActive} handleClickActive={handleClickActive} />
        <Btn>
          <Hamburger toggled={isActive} toggle={setIsActive} />
        </Btn>
      </HeaderContent>
    </HeaderItems>
  );
};

export default Header;
