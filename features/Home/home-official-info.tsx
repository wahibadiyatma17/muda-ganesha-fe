'use client';
import React, { FC } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Image from 'next/image';
import Badges from '@/components/Badges/DefaultBadges';
import OfficialInfoCarousel from '@/components/Carousel/OfficialInfoCarousel';
import { useWindowSize } from '@/utils';
import styled from '@emotion/styled';

const HomeOfficialInfo: FC = () => {
  const isMobile = useWindowSize().width < 768;

  return (
    <StyledHomeOfficalInfo>
      <div className="official-info__container">
        <div tw="flex items-center justify-between">
          <h3>Official Info</h3>
          <button className="official-info__button-black">
            {!isMobile && <span>Lihat Semua</span>}
            <HiOutlineArrowNarrowRight />
          </button>
        </div>

        <div className="official-info__main-banner">
          <div className="banner-image">
            <Image
              src={
                'https://s3.ap-southeast-3.amazonaws.com/public-assets.buatbesok.com/mudaganesha/announcements/announcement-1.webp'
              }
              objectFit={'cover'}
              layout={'fill'}
              alt="banner"
              style={{ borderRadius: isMobile ? '6px 0px 0px 6px' : '24px 0px 0px 24px' }}
            />
          </div>
          <div className="banner-content">
            <Badges variant="primary">Official Info</Badges>
            <h2>Undangan terbuka Reuni Akbar Muda Ganesha Tahun 2022</h2>
            <span className="banner-subtitle">2 Agustus 2022</span>
          </div>
        </div>

        <OfficialInfoCarousel />
      </div>
    </StyledHomeOfficalInfo>
  );
};

export default HomeOfficialInfo;

const StyledHomeOfficalInfo = styled.div`
  .official-info__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    background-color: white;
    padding: 16px;
    gap: 24px;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #443e3e;
  }

  .official-info__button-black {
    background: #ffffff;
    border-radius: 8px;
    width: 32px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
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

  @media (min-width: 768px) {
    .official-info__container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      background-color: white;
      max-width: 1366px;
      margin: 0 auto;
      padding: 40px 16px;
      gap: 32px;
    }

    h3 {
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: #443e3e;
    }

    .official-info__button-black {
      background: #121317;
      border-radius: 100px;
      width: 185px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
      color: #ffffff;
    }

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
