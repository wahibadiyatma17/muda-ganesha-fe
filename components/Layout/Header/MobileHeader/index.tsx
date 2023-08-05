import React, { FC } from 'react';

import DefaultMobileHeader from './DefaultMobileHeader';
import AuthenticationMobileHeader from './AuthenticationMobileHeader';

type MobileHeaderProps = {
  page?: string;
};

const MobileHeader: FC<MobileHeaderProps> = (props) => {
  const { page = '' } = props;

  const isAuthPage = page === 'authentication';

  return isAuthPage ? <AuthenticationMobileHeader /> : <DefaultMobileHeader />;
};

export default MobileHeader;
