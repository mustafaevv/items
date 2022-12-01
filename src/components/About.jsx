import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import image from "../images/about.png";

const Section = styled.section`
  padding: 100px 0;
`;

const AboutContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const Right = styled.div`
  width: 40%;
  @media (max-width: 992px) {
    width: 100%;
  }
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

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
`;

const About = () => {
  return (
    <Section>
      <AboutContent>
        <Left>
          <Title>About Us</Title>
          <Text>
            As is commonly believed, those seeking to displace traditional
            production, nanotechnologies can be verified in a timely manner. The
            opposite point of view implies that nanotechnologies, regardless of
            their level, seeking to isplace traditional production, should be
            functionally divided into independent elements.
          </Text>
        </Left>
        <Right>
          <Image src={image} alt="" />
        </Right>
      </AboutContent>
    </Section>
  );
};

export default About;
