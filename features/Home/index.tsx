import Layout from '@/components/Layout';
import React, { FC } from 'react';

const Home: FC = () => {
  return (
    <Layout>
      <div className="h-screen w-full flex items-center justify-center">
        <span className="font-bold text-red-500">HOME</span>
      </div>
    </Layout>
  );
};

export default Home;
