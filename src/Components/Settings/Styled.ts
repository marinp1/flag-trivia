import styled from '../../theme/styled';
import { breakpoints } from '../../theme';

interface ContainerProps {
  open: boolean;
}

const getStylePerProps = (
  props: ContainerProps,
): {
  width: undefined | React.CSSProperties['width'];
  hamburgerTop: React.CSSProperties['height'];
} => {
  if (props.open) {
    return {
      width: '100%',
      hamburgerTop: 0,
    };
  }
  return {
    width: undefined,
    hamburgerTop: '2rem',
  };
};

const Container = styled.div<ContainerProps>`
  z-index: 99;
  grid-area: settings;
  background: ${props => props.theme.colors.highlight};
  box-shadow: ${props => props.theme.boxShadow};
  height: 100%;
  text-transform: uppercase;
  box-sizing: border-box;
  h1 {
    font-weight: bold;
    margin-bottom: 1.5rem;
    margin-right: 2rem;
  }
  .hamburger {
    align-self: flex-start;
    padding: ${props => (props.open ? '15px 0' : '0')};
    display: ${props => (props.open ? 'block' : 'none')};
  }

  .hamburger-box {
    height: ${props => getStylePerProps(props).hamburgerTop};
    width: 2rem;
  }

  .hamburger:hover {
    opacity: 0.8 !important;
  }

  .hamburger:active {
    opacity: 0.7 !important;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background-color: ${props => props.theme.colors.primary} !important;
    width: 2rem;
    height: 4px;
  }

  padding: ${props => (props.open ? '2rem' : '2rem 0.5rem')};
  ${breakpoints.mobile} {
    padding: 2rem;
    .hamburger {
      display: block;
    }
  }
  width: ${props => getStylePerProps(props).width};
  ${breakpoints.tablet} {
    position: relative;
    max-width: ${props => (props.open ? '375px' : undefined)};
  }
`;

const Module = styled.div`
  margin-bottom: 1.5rem;
`;

const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default {
  Container,
  HeaderBar,
  Module,
};
