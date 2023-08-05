'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const DesktopNav: FC = () => {
  const router = useRouter();
  return (
    <div className="flex items-center space-x-4  min-w-[504px]">
      <div
        className="flex items-center h-full cursor-pointer min-w-[24px]"
        onClick={() => router.push('/')}
      >
        <Image src={'/login/icon-home.svg'} width={24} height={24} alt="icon home" />
      </div>

      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<Search2Icon color="gray.300" />} />
        <Input
          type="tel"
          placeholder="Cari relasi atau info lain ..."
          borderRadius={'6.25rem'}
          bg={'#F5F5F5'}
        />
      </InputGroup>

      {DesktopMenu.map((menu, index) => (
        <div
          className="flex items-center h-full cursor-pointer min-w-[24px]"
          key={index}
          onClick={() => router.push(menu.url)}
        >
          <Image src={menu.icon} width={24} height={24} alt="menu icon" />
        </div>
      ))}
    </div>
  );
};

export default DesktopNav;

const DesktopMenu = [
  {
    name: 'paper',
    url: '#',
    icon: '/login/icon-paper.svg',
  },
  {
    name: 'neutron',
    url: '#',
    icon: '/login/icon-neutron.svg',
  },
  {
    name: 'chat',
    url: '#',
    icon: '/login/icon-message.svg',
  },
  {
    name: 'dashboard',
    url: '#',
    icon: '/login/icon-layout.svg',
  },
];
