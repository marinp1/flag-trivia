import styled from '../../theme/styled';

interface ContainerProps {
  open: boolean;
}

const getStylePerProps = (
  props: ContainerProps
): {
  maxWidth: undefined | React.CSSProperties['maxWidth'];
  width: undefined | React.CSSProperties['width'];
} => {
  if (props.open) {
    return {
      maxWidth: '300px',
      width: '100%',
    };
  }
  return {
    maxWidth: undefined,
    width: undefined,
  };
};

const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.highlight};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 2rem;
  height: 100%;
  box-sizing: border-box;
  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  width: ${props => getStylePerProps(props).width};
  max-width: ${props => getStylePerProps(props).maxWidth};
`;

export default {
  Container,
};
