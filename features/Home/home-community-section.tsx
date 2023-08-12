'use client';

import React, { FC } from 'react';
import styled from '@emotion/styled';
import CommunityCard, { CommunityCardProps } from './component/CommunityCard';

const HomeCommunitySection: FC = () => {
  return (
    <StyledHomeCommunitySection>
      {DUMMY_COMMUNITY_DATA.map((card) => (
        <CommunityCard {...card} />
      ))}
    </StyledHomeCommunitySection>
  );
};
export default HomeCommunitySection;

const StyledHomeCommunitySection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  algin-items: center;
  justify-content: center;
  padding: 32px;
  max-width: 1366px;
  margin: 0 auto;
`;

const DUMMY_COMMUNITY_DATA = [
  {
    title: 'Lowongan Kerja',
    contentTitle: 'Politeknik Madyathika',
    contentDate: '10 Agustus 2022',
    contentImageUrl: '/community/img-community-1.png',
    cardType: 'community',
    buttonText: 'Loker Lainnya',
    buttonNextUrl: '#',
  },
  {
    title: 'Magang / Pelatihan',
    contentTitle: 'Sinarmas Mining',
    contentDate: '12 Agustus 2022',
    contentImageUrl: '/community/img-community-2.png',
    cardType: 'community',
    buttonText: 'Magang Lainnya',
    buttonNextUrl: '#',
  },
  {
    title: 'Jadwal Event',
    cardType: 'event',
    eventDate: {
      date: '15',
      month: 'AUG',
    },
    eventText: 'Mandiri goes to Purworejo: Recruitment & Talkshow Digital Banking',
    buttonText: 'Kalendar Event',
    buttonNextUrl: '#',
  },
] as Array<CommunityCardProps>;
