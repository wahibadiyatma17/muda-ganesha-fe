'use client';

import React, { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProfilePhotosSection: FC = () => {
  const pictureUrls = [
    '/profile/profile-1.jpeg',
    '/profile/profile-2.jpeg',
    '/profile/profile-3.jpeg',
    '/profile/profile-4.jpeg',
    '/profile/profile-5.jpeg',
    '/profile/profile-6.jpeg',
    '/profile/profile-7.jpeg',
    '/profile/profile-8.jpeg',
    '/profile/profile-9.jpeg',
    '/profile/profile-10.jpeg',
    '/profile/profile-1.jpeg',
    '/profile/profile-2.jpeg',
    '/profile/profile-3.jpeg',
    '/profile/profile-4.jpeg',
    '/profile/profile-5.jpeg',
    '/profile/profile-6.jpeg',
    '/profile/profile-7.jpeg',
    '/profile/profile-8.jpeg',
    '/profile/profile-9.jpeg',
    '/profile/profile-10.jpeg',
    '/profile/profile-6.jpeg',
    '/profile/profile-7.jpeg',
    '/profile/profile-8.jpeg',
    '/profile/profile-9.jpeg',
    '/profile/profile-10.jpeg',
    '/profile/profile-1.jpeg',
    '/profile/profile-2.jpeg',
    '/profile/profile-3.jpeg',
    '/profile/profile-4.jpeg',
    '/profile/profile-5.jpeg',
  ];

  return (
    <StyledProfilePhotosSection>
      {pictureUrls.map((imgUrl: string, idx: number) => (
        <div
          style={{
            gridColumn: idx % 2 === 0 ? 'span 1 / span 1' : 'auto',
            marginTop: idx % 2 === 0 ? '36px' : '0px',
          }}
        >
          <motion.div
            className="relative w-[64px] h-[64px]"
            animate={{
              opacity: [0, 0.2, 0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4, 0.2, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: (idx + 3) % 3 }}
          >
            <Image src={imgUrl} alt="profile" fill objectFit="cover" className="rounded-full" />
          </motion.div>
        </div>
      ))}
    </StyledProfilePhotosSection>
  );
};

export default ProfilePhotosSection;

const StyledProfilePhotosSection = styled.div`
  position: relative;
  max-height: 340px;
  height: 340px;
  width: 100%;
  //   gap: 36px;

  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
`;
