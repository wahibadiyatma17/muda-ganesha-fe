import Layout from '@/components/Layout';
import React, { FC } from 'react';
import HomeLandingSection from './home-landing-section';
import HomeOfficialInfo from './home-official-info';
import HomeCommunitySection from './home-community-section';
import HomeRecentPostSection from './home-recent-post-section';
import HomeGallerySection from './home-gallery-section';

const Home: FC = () => {
  return (
    <Layout>
      <HomeLandingSection />
      <HomeOfficialInfo />
      <HomeRecentPostSection />
      <HomeCommunitySection />
      <HomeGallerySection />
    </Layout>
  );
};

export default Home;
