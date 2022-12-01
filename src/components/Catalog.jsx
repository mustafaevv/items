import React from "react";
import styled from "styled-components";

import Container from "../layout/Container";
import items from "./catalogItems";

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

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6.3em;
  width: 100%;

  @media (max-width: 992px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const Items = styled.div``;

const Img = styled.img`
  width: 100%;
  margin-bottom: 1em;
`;
const Name = styled.h6`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: #000000;
`;
const Decr = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
  color: #4f4f4f;
`;
const Size = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: #333333;
`;

const Catalog = () => {
  return (
    <Section>
      <Container>
        <Title>Catalog</Title>
        <Contents>
          {items.map((item, index) => (
            <Items key={index}>
              <Img src={item.img} alt={item.name} />
              <Name>{item.name}</Name>
              <Decr>{item.decr}</Decr>
              <Size>{item.size}</Size>
            </Items>
          ))}
        </Contents>
      </Container>
    </Section>
  );
};

export default Catalog;
