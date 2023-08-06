import React, { FC } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styled from '@emotion/styled';
import { useWindowSize } from '@/utils';

interface BaseCarouselButtonProps {
  variant: 'next' | 'prev';
  theme?: 'white' | 'black';
  onClick?: () => void;
  disabled?: boolean;
  [x: string]: any;
}
type CarouselButtonProps = BaseCarouselButtonProps;

const CarouselButton: FC<CarouselButtonProps> = (props) => {
  const { variant, onClick, disabled, theme = 'white', ...other } = props;
  const isMobile = useWindowSize().width < 768;
  return (
    <StyledCarouselButton disabled={disabled} theme={theme} {...other}>
      {variant === 'next' ? (
        <AiOutlineArrowRight size={isMobile ? 12 : 32} />
      ) : (
        <AiOutlineArrowLeft size={isMobile ? 12 : 32} />
      )}
    </StyledCarouselButton>
  );
};

export default CarouselButton;

const StyledCarouselButton = styled.button<Pick<CarouselButtonProps, 'theme'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121317;
  border-radius: 25px;
  width: max-content;
  min-width: 48px;
  height: 24px;
  color: #ffffff;
  border: ${(props) => (props.theme === 'black' ? '1px solid white' : 'none')};

  :disabled {
    background: #8f8f8f !important;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #121317;
    border-radius: 100px;
    min-width: 72px;
    width: max-content;
    height: 48px;
    color: #ffffff;
    border: ${(props) => (props.theme === 'black' ? '1px solid white' : 'none')};
  }
`;
