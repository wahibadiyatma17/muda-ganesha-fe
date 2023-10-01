'use client';

import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const HomeBannerSection: FC = () => {
  return (
    <StyledHomeBannerSection>
      <div className="banner__container">
        <h6 className="text-content">
          Mari lebarkan relasi, bernostalgia, dan bersatu untuk peduli
        </h6>
        <Button
          bg={'#FC7061'}
          rightIcon={<ArrowForwardIcon />}
          colorScheme={'#FC7061'}
          style={{ backgroundColor: '#FC7061' }}
          borderRadius={'100px'}
          fontSize={'16px'}
          w={{ base: '240px', md: '278px' }}
          height={{ base: '40px' }}
          _hover={{
            transform: 'scale(1.05)',
          }}
        >
          Gabung ke MG
        </Button>
      </div>
    </StyledHomeBannerSection>
  );
};

export default HomeBannerSection;

const StyledHomeBannerSection = styled.section`
  max-width: 1366px;
  padding: 40px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0px 16px;

  .banner__container {
    display: flex;
    max-width: 720px;
    gap: 20px;
    padding: 24px 24px 40px 24px;
    flex-direction: column;
    align-items: center;
    border-radius: 24px;
    background: #121317;

    h6.text-content {
      max-width: 600px;
      color: #f5f5f5;
      text-align: center;
      font-size: 34px;
      font-style: normal;
      font-weight: 600;
      line-height: 46px;
    }
  }

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;
