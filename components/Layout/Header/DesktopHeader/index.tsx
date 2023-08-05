'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import DesktopNav from './DesktopNav';
import DesktopButton from './DesktopButton';

const DesktopHeader: FC = () => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-md z-[999] w-full h-full transition[background-color 1s ease 0s] ">
      <div className="max-w-[85.375rem] mx-auto w-full flex justify-between items-center space-x-4 py-4 px-4 lg:(px-[4.4375rem])">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image src={'/icon-mg.png'} width={24} height={24} alt="icon mg" />
          <h5 className="font-bold text-2xl">Muda Ganesha</h5>
        </div>
        <DesktopNav />
        <DesktopButton />
      </div>
    </div>
  );
};

export default DesktopHeader;
