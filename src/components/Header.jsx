import React, { useState } from "react";
import styled from "styled-components";
import { Cross as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { AiOutlineClose } from "react-icons/ai";

import Container from "../layout/Container";
import items from "../router";

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

const Close = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: #fff;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((state) => !state);
  return (
    <HeaderItems>
      <HeaderContent>
        <Logo href="#!">Logo</Logo>
        {/* <List open={open}>
          {items.map(({ name, id }, index) => (
            <li key={index}>
              <Link href={id}>{name}</Link>
            </li>
          ))}
        </List> */}
        <Close onClick={handleClick}>
          <Hamburger />
        </Close>
      </HeaderContent>
    </HeaderItems>
  );
};

export default Header;
