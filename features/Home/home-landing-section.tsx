'use client';

import React, { FC } from 'react';

import Image from 'next/image';
import { Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useWindowSize } from '@/utils';
import ProfilePhotosSection from './component/profile-photos-section';

const HomeLandingSection: FC = () => {
  const size = useWindowSize();
  const isMobile = size.width < 768;

  return (
    <div className="w-full bg-[#F5F5F5] h-[max-content] ">
      <div className="flex flex-col px-4 py-5 space-y-6 md:space-y-0 max-w-[1366px] mx-auto md:flex-row-reverse md:justify-between md:min-h-[400px] md:items-center">
        <ProfilePhotosSection />
        <div className="flex flex-col w-full space-y-4 max-w-[580px] md:space-y-[28px] md:mr-10">
          <h2 className="font-bold text-[#443E3E] text-2xl md:(text-[48px] leading-[60px])">
            #Bersatu Untuk Peduli
          </h2>
          <p className="font-semibold text-[#8F8F8F] text-sm md:text-2xl">
            Portal alumni SMA Negeri 1 Purworejo, paguyuban Muda Ganesha
          </p>
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
            Jelajahi Muda Ganesha
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingSection;
