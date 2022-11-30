import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

import banner from "../images/banner.png";
import Container from "../layout/Container";
import icons from "./bannerItems";

const Section = styled.section`
  position: relative;
  background: url(${banner}) no-repeat center / cover;
  width: 100%;
  height: 100vh;
  padding: 25px 0;
/* 
  &::after {
    content: "";
    position: absolute;
    width: 35%;
    height: 100%;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(14px);
    top: 0;
    z-index: 1;
    left: 0;
  } */
`;

const BannerItem = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  z-index: 10;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: clamp(25px, 4vw, 88px);
  line-height: 1.2;
  max-width: 90vh;
  color: #ffffff;
  margin-bottom: 0.5em;
  & span {
    position: relative;
    /* z-index: 5; */

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 8px;
      background: #f1ac02;
      bottom: 20%;
      left: 0;
      z-index: 3;
    }
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  max-width: 70vh;
  color: #ffffff;
  margin-bottom: 4em;
`;

const Button = styled.button`
  max-width: 210px;
  width: 100%;
  border: none;
  background: #f1ac02;
  font-weight: 500;
  font-size: 18px;
  line-height: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  cursor: pointer;
  margin-bottom: 3em;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1em;
`;
const Icon = styled.a`
  font-size: 22px;
  color: #fff;
  text-decoration: none;
`;

const Banner = () => {
  return (
    <Section>
      <BannerItem>
        <Title>
          Shopping with us is easy and <span>convenient</span>
        </Title>
        <Text>
          As is commonly believed, those seeking to displace traditional
          production, nanotechnologies can be verified in a timely manner.
        </Text>
        <Button>
          Full view <BsArrowRight />
        </Button>
        <List>
          {icons.map(({ icon, link }, index) => (
            <li key={index}>
              <Icon target={"_blank"} href={link}>
                {icon}
              </Icon>
            </li>
          ))}
        </List>
      </BannerItem>
    </Section>
  );
};

export default Banner;
