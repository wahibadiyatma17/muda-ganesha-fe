'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const DefaultMobileHeader = () => {
  const router = useRouter();

  return (
    <div className="h-[3.25rem] bg-white shadow-md w-full py-[.375rem] px-4">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Cari relasi atau info lain ..."
          borderRadius={'6.25rem'}
          bg={'#F5F5F5'}
        />
        <InputRightElement as={'button'} cursor={'pointer'} onClick={() => router.push('/login')}>
          <Image src="/login/icon-profile.svg" width={24} height={24} alt={'profile icon'} />
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default DefaultMobileHeader;
