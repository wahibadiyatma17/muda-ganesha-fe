'use client';

import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useWindowSize } from '@/utils';

const HomeGallerySection: FC = () => {
  const size = useWindowSize();
  const isMobile = size.width < 768;
  return (
    <StyledGallerySection>
      <div className="home-gallery__container">
        <h6 className="home-gallery__header">Galeri MG</h6>
        <div className="w-full h-[max-content] relative">
          <div className="flex flex-col absolute bg-gradient-to-t from-[#121317] h-1/2 top-1/2 w-full z-0">
            <div className="flex flex-row absolute bottom-3 justify-center items-center inset-x-0 h-[48px] z-10">
              <Button
                colorScheme={'#FFFFFF'}
                variant={'solid'}
                border={'1px'}
                rightIcon={<ArrowForwardIcon />}
                borderRadius={'100px'}
                fontSize={'16px'}
                w={{ base: '240px', md: '278px' }}
                height={{ base: '40px' }}
                _hover={{
                  transform: 'scale(1.05)',
                }}
              >
                Lihat Semua Gallery
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-4 w-full  h-[600px] md:(grid-cols-4 grid-rows-3)">
            <div className="w-full row-span-1 md:(row-span-2)">
              <img
                src="homepage/photo-1.avif"
                alt="gallery-1"
                className="inset-0 h-full w-full object-cover object-center rounded-3xl"
              />
            </div>
            <div className="w-full row-span-2 md:(row-span-1 col-span-1)">
              <img
                src="homepage/photo-2.avif"
                alt="gallery-2"
                className="inset-0 h-full w-full object-cover object-center rounded-t-3xl"
              />
            </div>
            <div className="w-full row-span-2 md:(row-span-3)">
              <img
                src="homepage/photo-3.jpg"
                alt="gallery-3"
                className="inset-0 h-full w-full object-cover object-center rounded-t-3xl"
              />
            </div>
            <div className="w-full row-span-1 md:(col-span-1)">
              <img
                src="homepage/photo-4.jpg"
                alt="gallery-4"
                className="inset-0 h-full w-full object-cover object-center rounded-3xl"
              />
            </div>
            {!isMobile && (
              <>
                <div className="w-full row-span-2">
                  <img
                    src="homepage/photo-5.avif"
                    alt="gallery-5"
                    className="inset-0 h-full w-full object-cover object-center rounded-t-3xl"
                  />
                </div>
                <div className="w-full row-span-2">
                  <img
                    src="homepage/photo-6.avif"
                    alt="gallery-6"
                    className="inset-0 h-full w-full object-cover object-center rounded-3xl"
                  />
                </div>
                <div className="w-full row-span-1">
                  <img
                    src="homepage/photo-7.avif"
                    alt="gallery-7"
                    className="inset-0 h-full w-full object-cover object-center rounded-t-3xl"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </StyledGallerySection>
  );
};

export default HomeGallerySection;

const StyledGallerySection = styled.section`
  background: #121317;
  width: 100%;
  padding: 0px 16px;

  .home-gallery__container {
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    display: flex;
    flex-shrink: 0;
    min-height: 500px;
    padding: 40px 0px;

    max-width: 85.375rem;
    margin: 0 auto;
  }

  h6.home-gallery__header {
    color: #f5f5f5;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
