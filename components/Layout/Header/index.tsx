'use client';
import React, { FC } from 'react';

import { useWindowSize } from '@/utils';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

type HeaderProps = {
  page?: string;
};

const Header: FC<HeaderProps> = (props) => {
  const { page = '' } = props;

  const size = useWindowSize();
  const isMobile = size.width < 1024;

  return isMobile ? <MobileHeader page={page} /> : <DesktopHeader />;
};

export default Header;
