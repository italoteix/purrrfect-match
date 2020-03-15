import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: 100px;
  margin: 70% auto;
`;

export const Paw = styled.div`
  width: 50%;
  height: 50%;
  position: relative;

  &:first-child {
    animation: moverLeft 0.75s infinite alternate-reverse ease-in-out,
      blink 1.5s infinite ease;
  }

  &:last-child {
    margin-left: auto;
    animation: moverRight 0.75s infinite alternate ease-in-out,
      blinkReverse 1.5s infinite ease;
  }

  @keyframes moverLeft {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes moverRight {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    40% {
      opacity: 0.5;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes blinkReverse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    60% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const MetaPad = styled.div`
  display: block;
  width: 60%;
  height: 50%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translatex(-50%);
`;

export const DigiPad = styled.div`
  width: 25%;
  height: 35%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 50%;

  position: absolute;
  left: 0;
  top: 24%;

  &:nth-of-type(2) {
    left: unset;
    right: 0;
  }

  &:nth-of-type(3) {
    top: 0;
    left: 22%;
  }

  &:nth-of-type(4) {
    top: 0;
    left: unset;
    right: 22%;
  }
`;
