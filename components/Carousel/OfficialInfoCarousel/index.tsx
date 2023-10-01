'use client';

import React, { FC, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import styled from '@emotion/styled';

import CarouselCard from '@/components/Cards/CarouselCard';
import CarouselButton from '@/components/Buttons/CarouselButton';

const OfficialInfoCarousel: FC = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 5000,
    autoplay: false,
    slidesToShow: 1.4,
    slidesToScroll: 0.7,
    arrows: true,
    prevArrow: <></>,
    nextArrow: <></>,
    variableWidth: true,
    adaptiveHeight: false,
    appendDots: (dots: any) => <OfficialInfoCarouselNavigation dots={dots} />,
  } as Settings;

  const OfficialInfoCarouselNavigation = ({ dots }: { dots: React.ReactNode }) => {
    return (
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row mt-3 slick-dots" style={{ position: 'inherit' }}>
          {dots}
        </div>
        <div className="flex-row items-center mt-2 hidden sm:flex md:mt-0 gap-2 md:gap-3 md:max-w-[300px] ">
          <CarouselButton variant="prev" onClick={() => sliderRef?.slickPrev()} />
          <CarouselButton variant="next" onClick={() => sliderRef?.slickNext()} />
        </div>
      </div>
    );
  };

  return (
    <StyledOfficialInfoCarousel>
      <Slider {...settings} ref={(slider: any) => setSliderRef(slider)}>
        {[0, 1, 2].map((data, idx) => (
          <CarouselCard key={idx} />
        ))}
      </Slider>
    </StyledOfficialInfoCarousel>
  );
};

export default OfficialInfoCarousel;

const StyledOfficialInfoCarousel = styled.div`
  padding-left: 0;
  padding-right: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .slick-slide {
    padding: 0 0.25rem;
    box-sizing: border-box;
  }

  .slick-dots li button {
    display: none;
  }

  .slick-dots li button:before {
    font-size: 6px;
  }

  @media (min-width: 768px) {
    .slick-slide {
      margin: 0 0.2rem;
    }

    .slick-list {
      padding: 0.625rem 0;
    }

    .slick-dots li button:before {
      font-size: 12px;
    }
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  z-index: 1;
  top: calc(50% - 0.75rem);

  min-width: 2rem;
  min-height: 2rem;
  width: 2rem;
  height: 2rem;

  border-radius: 9999px;
  border: 1px solid #ff6112;
  background: #ff6112;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    top: calc(50% - 1.5rem);
    min-width: 3rem;
    min-height: 3rem;
    width: 3rem;
    height: 3rem;
  }
`;
