'use client';

import React, { FC } from 'react';
import styled from '@emotion/styled';
import { CarouselHeaderButton } from './home-official-info';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useWindowSize } from '@/utils';
import Image from 'next/image';
import Badges from '@/components/Badges/DefaultBadges';
import OfficialInfoCarousel from '@/components/Carousel/OfficialInfoCarousel';

const HomeRecentPostSection: FC = () => {
  const isMobile = useWindowSize().width < 768;

  return (
    <StyledHomeRecentPost>
      <div className="recent-post__container">
        <div className="recent-post__header">
          <h6>Post Terbaru</h6>
          <CarouselHeaderButton>
            {!isMobile && <span>Lihat Semua</span>}
            <HiOutlineArrowNarrowRight />
          </CarouselHeaderButton>
        </div>

        <div className="official-info__main-banner">
          <div className="banner-image">
            <Image
              src={
                'https://s3.ap-southeast-3.amazonaws.com/public-assets.buatbesok.com/mudaganesha/announcements/announcement-2.webp'
              }
              objectFit={'cover'}
              layout={'fill'}
              alt="banner"
              style={{ borderRadius: isMobile ? '6px 0px 0px 6px' : '24px 0px 0px 24px' }}
            />
          </div>
          <div className="banner-content">
            <span className="banner-subtitle">13 Agustus 2022</span>

            <h2>Hutan Jabon “Wana Muda Ganesha”</h2>
            <Badges variant="tertiary">oleh MG 1980</Badges>
          </div>
        </div>

        <div className="carousel__container">
          <OfficialInfoCarousel />
        </div>
      </div>
    </StyledHomeRecentPost>
  );
};

export default HomeRecentPostSection;

const StyledHomeRecentPost = styled.section`
  padding: 40px 88px 24px 88px;
  background: #121317;

  .recent-post__container {
    max-width: 1366px;
    margin: 0 auto;
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    flex-shrink: 0;
  }

  .recent-post__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h6 {
      color: #f5f5f5;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }

  .official-info__main-banner {
    width: 100%;
    height: 110px;
    display: flex;

    .banner-image {
      position: relative;
      border-radius: 24px 0px 0px 24px;
      height: 100%;
      width: 62.5%;
    }

    .banner-content {
      heigth: 100%;
      width: 37.5%;
      display: flex;
      padding: 8px 12px;
      justify-content: center;
      flex-direction: column;
      gap: 8px;
      background: #f5f5f5;
      border-radius: 0px 6px 6px 0px;
    }

    h2 {
      color: #443e3e;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
    }

    .banner-subtitle {
      color: #8f8f8f;
      font-weight: 600;
      font-size: 8px;
      line-height: 12px;
    }
  }

  .carousel__container {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    .official-info__main-banner {
      width: 100%;
      height: 432px;
      display: flex;

      .banner-image {
        position: relative;
        border-radius: 24px 0px 0px 24px;
        height: 100%;
        width: 62.5%;
      }

      .banner-content {
        heigth: 100%;
        width: 37.5%;
        display: flex;
        padding: 0px 40px;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
        background: #f5f5f5;
        border-radius: 0px 24px 24px 0px;
      }

      h2 {
        color: #443e3e;
        font-weight: 700;
        font-size: 34px;
        line-height: 44px;
      }

      .banner-subtitle {
        color: #8f8f8f;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
`;
