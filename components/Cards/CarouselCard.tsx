import { useWindowSize } from '@/utils';
import styled from '@emotion/styled';
import Image from 'next/image';
import 'react';
import { FC } from 'react';
import Badges from '../Badges/DefaultBadges';

const CarouselCard: FC = () => {
  const isMobile = useWindowSize().width < 768;
  return (
    <StyledCarouselCard>
      <div className="carousel-card__container">
        <Image
          src={
            'https://s3.ap-southeast-3.amazonaws.com/public-assets.buatbesok.com/mudaganesha/posts/post-2.webp'
          }
          layout="fill"
          alt="post"
          objectFit="cover"
          style={{ borderRadius: isMobile ? '6px' : '24px', background: '' }}
        />
        <div className="carousel-card__card-overlay">
          <div className="carousel-card__card-content">
            <h2>Seruan untuk MG, ikuti tanam pohon bersama KLMK</h2>
            <div className="subcontent">
              <Badges variant="primary">Official Info</Badges>
              <span className="subtitle">13 Agustus 2022</span>
            </div>
          </div>
        </div>
      </div>
    </StyledCarouselCard>
  );
};

export default CarouselCard;

const StyledCarouselCard = styled.div`
  .carousel-card__container {
    width: 214px;
    height: 110px;
    border-radius: 6px;
    position: relative;
  }

  .carousel-card__card-overlay {
    position: absolute;
    background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    border-radius: 6px;
    width: 214px;
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .carousel-card__card-content {
    display: flex;
    flex-direction: column;
    padding: 6px;
    gap: 4px;

    h2 {
      color: #f5f5f5;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
    }

    .subcontent {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .subtitle {
      font-weight: 600;
      font-size: 8px;
      line-height: 12px;
      color: #8f8f8f;
    }
  }

  @media (min-width: 768px) {
    .carousel-card__container {
      width: 835px;
      height: 432px;
      border-radius: 24px;
      position: relative;
    }

    .carousel-card__card-overlay {
      position: absolute;
      background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      border-radius: 24px;
      width: 835px;
      height: 432px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .carousel-card__card-content {
      display: flex;
      flex-direction: column;
      padding: 25px 40px;
      gap: 24px;

      h2 {
        color: #f5f5f5;
        font-weight: 700;
        font-size: 34px;
        line-height: 44px;
      }

      .subcontent {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .subtitle {
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #8f8f8f;
      }
    }
  }
`;
