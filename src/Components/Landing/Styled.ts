import styled from '../../theme/styled';
import { breakpoints } from '../../theme';

type GridCell = 'region' | 'mode' | 'space' | 'button';

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 800px;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  grid-template-areas:
    'region'
    'mode'
    'button';
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'region mode'
      'button button';
  }
`;

interface GridCellProps {
  name: GridCell;
}

const GridCell = styled.div<GridCellProps>`
  grid-area: ${props => props.name};
`;

const ButtonCell = styled.div<GridCellProps>`
  align-self: end;
  ${breakpoints.tablet} {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
`;

const GameModeInfo = styled.h5`
  padding-top: 1rem;
`;

export default {
  Container,
  GridCell,
  ButtonCell,
  GameModeInfo,
};
