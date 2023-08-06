import React, { FC } from 'react';
import styled from '@emotion/styled';

interface BaseBadgesProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: string;
}

type BadgesProps = BaseBadgesProps;

const Badges: FC<BadgesProps> = (props) => {
  const { variant, children } = props;
  return (
    <StyledBadges variant={variant}>
      <div className="badges__container">{children}</div>
    </StyledBadges>
  );
};

export default Badges;

const StyledBadges = styled.div<Pick<BadgesProps, 'variant'>>`
  .badges__container {
    background: ${(props) => (props.variant === 'primary' ? '#fc7061' : '#F9C941')};
    min-width: 34px;
    width: max-content;
    height: 12px;
    border-radius: 18px;
    padding: 8px 4px;

    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 5px;
    line-height: 7px;
    color: ${(props) =>
      props.variant === 'primary'
        ? '#ffffff'
        : props.variant === 'secondary'
        ? '#121317'
        : '#D9D9D9'};
  }

  @media (min-width: 768px) {
    .badges__container {
      background: ${(props) => (props.variant === 'primary' ? '#fc7061' : '#F9C941')};
      min-width: 111px;
      width: max-content;
      height: 28px;
      border-radius: 70px;
      padding: 0px 12px;

      display: flex;
      flex-direction: center;
      align-items: center;
      justify-content: center;

      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: ${(props) =>
        props.variant === 'primary'
          ? '#ffffff'
          : props.variant === 'secondary'
          ? '#121317'
          : '#D9D9D9'};
    }
  }
`;
