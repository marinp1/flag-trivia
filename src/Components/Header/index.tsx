import React from 'react';
import Styled from './Styled';

import Translations from '../../translations';

const Header = ({ translations }: { translations: typeof Translations }) => {
  const { general } = translations;
  return (
    <Styled.Container>
      <h1>{general['application-name']}</h1>
      <h6>
        <i>{general['application-tagline']}</i>
      </h6>
    </Styled.Container>
  );
};

export default Header;
