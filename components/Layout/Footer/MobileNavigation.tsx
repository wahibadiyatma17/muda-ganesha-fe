'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { Button } from '@chakra-ui/react';

const MobileNavigation: FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-between w-full ">
      <Button
        width="123px"
        height="40px"
        leftIcon={
          <Image
            src={'/login/icon-home-white.svg'}
            width={24}
            height={24}
            color="white"
            alt="home icon"
          />
        }
        bg="#FC7061"
        color="#ffffff"
        borderRadius="100px"
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
        Beranda
      </Button>
      {DesktopMenu.map((menu, index) => (
        <div
          className="flex items-center h-full cursor-pointer "
          key={index}
          onClick={() => router.push(menu.url)}
        >
          <Image src={menu.icon} width={24} height={24} alt="menu icon" />
        </div>
      ))}
    </div>
  );
};

export default MobileNavigation;

const DesktopMenu = [
  {
    name: 'neutron',
    url: '#',
    icon: '/login/icon-neutron.svg',
  },
  {
    name: 'paper',
    url: '#',
    icon: '/login/icon-paper.svg',
  },
  {
    name: 'donation',
    url: '#',
    icon: '/login/icon-donation.svg',
  },
];
