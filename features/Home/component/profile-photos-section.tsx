'use client';

import React, { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface RandomPictureType {
  url: string;
  position: {
    left: number;
    top: number;
  } | null;
}

const ProfilePhotosSection: FC = () => {
  const [pictures, setPictures] = useState<Array<RandomPictureType>>([]);

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
  useEffect(() => {
    // Function to arrange positions in a grid with a maximum number of pictures
    const generateGridPositions = (
      numPictures: number,
      containerWidth: number,
      containerHeight: number,
      imageWidth: number,
      imageHeight: number,
      gap: number,
    ) => {
      const maxPicturesPerRow = Math.floor((containerWidth + gap) / (imageWidth + gap));
      const numRows = Math.ceil(numPictures / maxPicturesPerRow);

      const rowHeight = (containerHeight - (numRows - 1) * gap) / numRows;
      const colWidth = (containerWidth - (maxPicturesPerRow - 1) * gap) / maxPicturesPerRow;

      const positions: { left: number; top: number }[] = [];

      for (let row = 0; row < numRows; row++) {
        for (
          let col = 0;
          col < maxPicturesPerRow && row * maxPicturesPerRow + col < numPictures;
          col++
        ) {
          const left = col * (colWidth + gap);
          const top = row * (rowHeight + gap);
          positions.push({ left, top });
        }
      }

      return positions;
    };

    // Function to shuffle the array randomly
    const shuffleArray = (array: RandomPictureType[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const imageWidth = 64;
    const imageHeight = 64;
    const gap = 24;
    const containerWidth = 600;
    const containerHeight = 340;

    const gridPositions = generateGridPositions(
      pictureUrls.length,
      containerWidth,
      containerHeight,
      imageWidth,
      imageHeight,
      gap,
    );

    const shuffledPictures: RandomPictureType[] = pictureUrls.map((url, index) => ({
      url,
      position: {
        left: gridPositions[index].left - imageWidth / 2,
        top: gridPositions[index].top - imageHeight / 2,
      },
    }));

    shuffleArray(shuffledPictures);

    setPictures(shuffledPictures);
  }, []);

  console.log('wahib pictures', pictures);

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
