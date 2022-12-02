import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import Container from "../layout/Container";
import sliderItems from "./sliderItems";

import "swiper/css";
import "swiper/css/navigation";

const Section = styled.section``;

const SliderContent = styled(Container)`
  & .swiper {
    &-button-prev,
    &-button-next {
      color: #f1ac02;
    }
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

const SliderInner = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
`;

const Slider = () => {
  return (
    <Section>
      <SliderContent>
        <Title>New collection</Title>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          breakpoints={{
            678: {
              slidesPerView: 2,
            },
            786: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={60}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {sliderItems.map(({ img }, index) => (
            <SliderInner key={index}>
              <SwiperSlide>
                <Image src={img} alt="" />
              </SwiperSlide>
            </SliderInner>
          ))}
        </Swiper>
      </SliderContent>
    </Section>
  );
};

export default Slider;
