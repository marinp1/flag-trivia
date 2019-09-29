import React from 'react';
import Styled from './Styled';

import Translations from '../../translations';

import { Button, ComboBox } from '../Utils';

import { REGIONS, GAME_MODES } from '../../utils';
import { Region, GameMode } from '../../types';

const Landing = ({ translations }: { translations: typeof Translations }) => {
  const { landing } = translations;
  const [selectedRegion, selectRegion] = React.useState<Region>('world');
  const [selectedMode, selectMode] = React.useState<GameMode>('random');
  return (
    <Styled.Container>
      <Styled.GridCell name="region">
        <ComboBox<Region>
          title={landing['select-region-label']}
          selection={selectedRegion}
          choices={REGIONS.map(region => ({
            key: region,
            value: landing.region[region],
          }))}
          setSelection={selectRegion}
        />
      </Styled.GridCell>
      <Styled.GridCell name="mode">
        <ComboBox<GameMode>
          title={landing['select-mode-label']}
          selection={selectedMode}
          choices={GAME_MODES.map(gameMode => ({
            key: gameMode,
            value: landing.mode[gameMode],
          }))}
          setSelection={selectMode}
        />
        <Styled.GameModeInfo>
          {landing['select-mode-info-label'][selectedMode]}
        </Styled.GameModeInfo>
      </Styled.GridCell>
      <Styled.ButtonCell name="button">
        <Button onClick={() => console.log('Clicked')}>
          {landing['start-new-game-label']}
        </Button>
      </Styled.ButtonCell>
    </Styled.Container>
  );
};

export default Landing;
