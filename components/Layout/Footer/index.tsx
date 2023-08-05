'use client';

import { useWindowSize } from '@/utils';
import styled from '@emotion/styled';

import { FC } from 'react';
import Footer from './Footer';
import MobileNavigation from './MobileNavigation';

const FooterSection: FC = () => {
  const size = useWindowSize();
  const isMobile = size.width < 1024;
  return (
    <StyledFooter>
      <Footer />
      {isMobile && (
        <div className="footer__container ">
          <MobileNavigation />
        </div>
      )}
    </StyledFooter>
  );
};

export default FooterSection;

const StyledFooter = styled.div`
  .footer__container {
    background-color: #ffffff;
    width: 100%;
    height: 52px;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    padding: 6px 24px;
    filter: drop-shadow(0 -1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 -1px 1px rgb(0 0 0 / 0.06));
  }
`;
