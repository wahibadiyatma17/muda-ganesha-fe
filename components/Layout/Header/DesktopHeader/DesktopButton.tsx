'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';

const DesktopButton: FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row space-x-4 items-center">
      <Button
        width="108px"
        height="40px"
        leftIcon={<MdLogin />}
        color="#fff"
        borderRadius="100px"
        style={{
          backgroundColor: '#FC7061',
        }}
        _hover={{
          backgroundColor: '#FC7061',
          transform: 'scale(1.05)',
        }}
        _focus={{
          backgroundColor: '#FC7061',
          transform: 'scale(1.05)',
        }}
        onClick={() => router.push('/#')}
      >
        Masuk
      </Button>
      <Button
        width="108px"
        height="40px"
        leftIcon={<BiDonateHeart />}
        bg="#ffffff"
        color="#443E3E"
        borderRadius="100px"
        _hover={{
          backgroundColor: '#ffffff',
          transform: 'scale(1.05)',
        }}
        _focus={{
          backgroundColor: '#ffffff',
          transform: 'scale(1.05)',
        }}
      >
        Donasi
      </Button>
    </div>
  );
};

export default DesktopButton;
