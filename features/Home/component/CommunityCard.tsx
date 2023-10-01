import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';

export interface CommunityCardProps {
  title: string;
  contentTitle?: string;
  contentDate?: string;
  contentImageUrl?: string;
  cardType: 'community' | 'event';
  eventDate?: {
    date: string;
    month: string;
  };
  eventText?: string;
  buttonText: string;
  buttonNextUrl: string;
}

const CommunityCard: FC<CommunityCardProps> = (props) => {
  const {
    title,
    contentTitle,
    contentDate,
    contentImageUrl,
    eventDate,
    eventText,
    cardType,
    buttonText,
    buttonNextUrl,
  } = props;

  const router = useRouter();
  return (
    <StyledCommunityCard>
      <div className="card-title">
        <h6>{title}</h6>
      </div>
      {cardType === 'event' ? (
        <div className="community-profile-card">
          <div className="event-date">
            <h6>{eventDate?.date}</h6>
            <span>{eventDate?.month}</span>
          </div>

          <div className="profile-content">
            <h6 className="title">{eventText}</h6>
          </div>
        </div>
      ) : (
        <div className="community-profile-card">
          <div className="card-profile">
            <Image
              src={contentImageUrl ?? '/community/img-community-1.png'}
              alt="community 1"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="profile-content">
            <h6 className="title">{contentTitle}</h6>
            <div className="calendar-container">
              <div className="relative w-4 h-4">
                <Image
                  src={'/community/icon-sandwatch.svg'}
                  fill
                  alt="icon watch"
                  objectFit="contain"
                />
              </div>
              <span>{contentDate}</span>
            </div>
          </div>
        </div>
      )}

      <StyledCommunityCardButton onClick={() => router.push(buttonNextUrl)}>
        <span>{buttonText}</span>
        <BsArrowRight h={12} w={16} style={{ color: '#fff' }} />
      </StyledCommunityCardButton>
    </StyledCommunityCard>
  );
};

export default CommunityCard;

const StyledCommunityCard = styled.div`
  height: 216px;
  max-height: 216px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;

  .card-title {
    padding: 10px 8px;
    h6 {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: #443e3e;
    }
  }

  .community-profile-card {
    height: 64px;
    display: flex;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 10px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.07);

    .card-profile {
      position: relative;
      width: 64px;
      height: 64px;
    }

    .event-date {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      width: 64px;
      height: 100%;
      color: #fc7061;
      text-align: center;
      font-style: normal;

      h6 {
        font-size: 34px;
        font-weight: 600;
        line-height: 33px;
      }
      span {
        font-size: 12px;
        font-weight: 700;
        line-height: 12px;
      }
    }

    .profile-content {
      display: flex;
      padding: 8px 16px 8px 8px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 2px;
      flex: 1 0 0;
      align-self: stretch;

      border-radius: 0px 12px 12px 0px;
      background: var(--white, #fff);

      h6.title {
        color: #443e3e;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
      }

      .calendar-container {
        display: flex;
        align-items: flex-start;
        gap: 2px;
        align-self: stretch;

        span {
          color: #8f8f8f;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 416px;
  }
`;

const StyledCommunityCardButton = styled.button`
  display: flex;
  height: 48px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;

  border-radius: 100px;
  background: var(--executive, #121317);

  span {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  :hover {
    transform: scale(1.02);
  }

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 350ms;
`;
