import styled from '../../theme/styled';
import { breakpoints } from '../../theme';

interface ContainerProps {
  open: boolean;
}

const getStylePerProps = (
  props: ContainerProps
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
  float: left;
  background: ${props => props.theme.colors.highlight};
  box-shadow: ${props => props.theme.boxShadow};
  height: 100%;
  text-transform: uppercase;
  box-sizing: border-box;
  h1 {
    font-weight: bold;
    margin-bottom: 1rem;
    margin-right: 2rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  .hamburger {
    padding: 0;
    display: none;
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

  padding: 2rem 0.5rem;
  ${breakpoints.mobile} {
    padding: 2rem;
    .hamburger {
      display: block;
    }
  }

  width: ${props => getStylePerProps(props).width};
  ${breakpoints.tablet} {
    display: block;
    max-width: ${props => (props.open ? '300px' : undefined)};
  }
`;

const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default {
  Container,
  HeaderBar,
};
