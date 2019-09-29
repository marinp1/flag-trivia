import styled from '../../../theme/styled';

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const Container = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.smallBoxShadow};
`;

interface TagContent {
  content: string | number;
  selected?: boolean;
}

const Selection = styled.div<{ tag?: TagContent }>`
  user-select: none;
  cursor: pointer;
  font-weight: normal;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.elements.color1};
  position: relative;
  &.selected {
    font-weight: bolder;
  }
  &:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius};
    border-top-right-radius: ${props => props.theme.borderRadius};
  }
  &:last-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
    border-bottom-right-radius: ${props => props.theme.borderRadius};
    border-bottom: none;
  }
  &:nth-child(2n + 1) {
    background: ${props => props.theme.elements.color2};
  }
  :hover {
    filter: brightness(95%);
  }
  :active {
    filter: brightness(90%);
  }
  &::after {
    display: ${props => (props.tag ? 'inline-block' : 'none')};
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.smallBoxShadow};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    padding: 0.25rem 0.5rem;
    text-align: center;
    content: ${props => (props.tag ? `'${props.tag.content}'` : undefined)};
    font-weight: ${props =>
      props.tag && props.tag.selected ? 'bolder' : 'normal'};
  }
`;

export default {
  Title,
  Container,
  Selection,
};
