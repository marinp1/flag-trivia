import React, { FunctionComponent } from 'react';
import Styled from './Styled';

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = props => {
  return (
    <Styled.Button onClick={props.onClick}>{props.children}</Styled.Button>
  );
};

export default Button;
