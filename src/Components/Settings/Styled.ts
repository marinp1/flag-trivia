import styled from '../../theme/styled';

interface ContainerProps {
  open: boolean;
}

const getStylePerProps = (
  props: ContainerProps
): {
  maxWidth: undefined | React.CSSProperties['maxWidth'];
  width: undefined | React.CSSProperties['width'];
  hamburgerTop: React.CSSProperties['height'];
} => {
  if (props.open) {
    return {
      maxWidth: '300px',
      width: '100%',
      hamburgerTop: 0,
    };
  }
  return {
    maxWidth: undefined,
    width: undefined,
    hamburgerTop: '2rem',
  };
};

const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.highlight};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 2rem;
  height: 100%;
  text-transform: uppercase;
  box-sizing: border-box;
  h1 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  width: ${props => getStylePerProps(props).width};
  max-width: ${props => getStylePerProps(props).maxWidth};

  .hamburger {
    padding: 0;
  }

  .hamburger-box {
    height: ${props => getStylePerProps(props).hamburgerTop};
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 2rem;
    height: 4px;
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
