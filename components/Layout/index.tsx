import React, { FC } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
  page?: string;
};

const Layout: FC<LayoutProps> = (props) => {
  const { children, page = '' } = props;

  const isAuthPage = page === 'authentication';

  return (
    <div className="min-h-full w-full flex flex-col">
      <Header page={page} />
      <div className="h-full">
        <div className="h-full relative">{children}</div>
      </div>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default Layout;
