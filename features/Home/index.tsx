import Layout from '@/components/Layout';
import React, { FC } from 'react';
import HomeLandingSection from './home-landing-section';
import HomeOfficialInfo from './home-official-info';
import HomeCommunitySection from './home-community-section';

const Home: FC = () => {
  return (
    <Layout>
      <HomeLandingSection />
      <HomeOfficialInfo />
      <HomeCommunitySection />
    </Layout>
  );
};

export default Home;
