'use client';

import React, { FC } from 'react';
import styled from '@emotion/styled';
import { CarouselHeaderButton } from './home-official-info';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useWindowSize } from '@/utils';

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
`;
