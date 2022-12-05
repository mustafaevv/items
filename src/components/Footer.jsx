import React from "react";
import styled from "styled-components";
import Container from "../layout/Container";
import items from "../router";

const FooterItem = styled.footer`
  background: #212121;
  width: 100%;
  padding: 15px 0;
`;

const FooterContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const Logo = styled.a`
  font-weight: 700;
  font-size: 32px;
  color: #f1ac02;
  text-decoration: none;

  @media (max-width: 786px) {
    margin-bottom: 2em;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 3em;

  @media (max-width: 678px) {
    flex-direction: column;
    text-align: center;
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

const Footer = () => {
  return (
    <FooterItem>
      <FooterContent>
        <Logo href="/">Logo</Logo>
        <List>
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.id}>{item.name}</Link>
            </li>
          ))}
        </List>
      </FooterContent>
    </FooterItem>
  );
};

export default Footer;
