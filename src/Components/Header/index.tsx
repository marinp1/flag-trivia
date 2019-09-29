import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Styled from './Styled';

import Translations from '../../translations';

type Props = {
  translations: typeof Translations;
} & RouteComponentProps;

const Header: React.FC<Props> = ({ translations, ...rest }) => {
  const { general } = translations;
  return (
    <Styled.Container onClick={() => rest.history.push(`/`)}>
      <h1>{general['application-name']}</h1>
      <h6>
        <i>{general['application-tagline']}</i>
      </h6>
    </Styled.Container>
  );
};

export default withRouter(Header);
