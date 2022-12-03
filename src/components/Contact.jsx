import React from "react";
import styled from "styled-components";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";

import Container from "../layout/Container";
import img from "../images/contact.png";
import map from "../images/map.png";
import icons from "./bannerItems";

const Section = styled.section`
  padding: 100px 0;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: clamp(30px, 4vw, 48px);
  color: #000000;
  display: inline-block;
  margin-bottom: 2em;

  &::after {
    content: "";
    width: 100%;
    height: 8px;
    background: #f1ac02;
    display: block;
  }
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
`;
const Left = styled.div``;
const Right = styled.div``;

const Img = styled.img`
  width: 100%;
`;

const Content = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Social = styled.div`
  & ul {
    display: flex;
    list-style: none;
    gap: 1em;

    & li {
      & a {
        color: #f1ac02;
        font-size: 20px;
      }
    }
  }
`;

const Email = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  & p {
    display: flex;
    align-items: center;
    gap: 0.4em;

    & svg {
      color: #f1ac02;
      font-size: 20px;
    }
  }
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  gap: 5em;
`;
const Address = styled.div`
  display: flex;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <Title>Contact</Title>
        <Items>
          <Left>
            <Img src={img} alt="" />
          </Left>
          <Right>
            <Img src={map} alt="" />

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50263874594!2d69.1392822195783!3d41.2825125454214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1670078722077!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </Right>
        </Items>
        <Content>
          <Social>
            <h6>Social media</h6>
            <ul>
              {icons.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </Social>
          <Email>
            <h6>Email</h6>
            <p>
              <MdEmail /> example@gmail.com
            </p>
          </Email>
          <Phone>
            <h6>Phone number</h6>
            <a href="tel:+9987777777">
              <MdPhone /> +998 777 77 77
            </a>
          </Phone>
          <Address>
            <h6>Address</h6>
            <p>
              <MdLocationPin /> Tashkent, Ganga, Aliyev street 7th house
            </p>
          </Address>
        </Content>
      </Container>
    </Section>
  );
};

export default Contact;
