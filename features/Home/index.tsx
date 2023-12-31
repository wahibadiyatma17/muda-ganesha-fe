import Layout from '@/components/Layout';
import React, { FC } from 'react';
import HomeLandingSection from './home-landing-section';
import HomeOfficialInfo from './home-official-info';
import HomeCommunitySection from './home-community-section';
import HomeRecentPostSection from './home-recent-post-section';
import HomeGallerySection from './home-gallery-section';
import HomeBannerSection from './home-banner-section';

const Home: FC = () => {
  return (
    <Layout>
      <HomeLandingSection />
      <HomeOfficialInfo />
      <HomeRecentPostSection />
      <HomeCommunitySection />
      <HomeGallerySection />
      <HomeBannerSection />
    </Layout>
  );
};

export default Home;
