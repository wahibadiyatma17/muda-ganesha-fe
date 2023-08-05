'use client';

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

import { ArrowBackIcon } from '@chakra-ui/icons';

const AuthenticationMobileHeader: FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-[52px] px-4 w-full bg-white shadow-md flex flex-row justify-between items-center">
      <ArrowBackIcon
        w={'24px'}
        h={'24px'}
        as="button"
        cursor={'pointer'}
        onClick={() => router.back}
      />
      <h3 className="text-[#443E3E] text-base font-semibold -ml-4">Masuk Portal MG</h3>
      <div />
    </div>
  );
};

export default AuthenticationMobileHeader;
