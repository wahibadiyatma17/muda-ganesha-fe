import Layout from '@/components/Layout';
import React, { FC } from 'react';
import HomeLandingSection from './home-landing-section';
import HomeOfficialInfo from './home-official-info';

const Home: FC = () => {
  return (
    <Layout>
      <HomeLandingSection />
      <HomeOfficialInfo />
    </Layout>
  );
};

export default Home;
