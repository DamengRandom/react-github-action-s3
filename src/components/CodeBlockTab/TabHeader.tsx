import { h } from 'preact';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  ${(props: { isActive: boolean; css: string; index: number }) =>
    props.isActive
      ? 'border-bottom: 4px solid lightblue; pointer-events: none;'
      : 'border-bottom: none;'}
  ${(props: { isActive: boolean; css: string; index: number }) => props.css};
  h5 {
    margin: 0.5rem 1rem 0.5rem 0;
    text-align: left;
  }
`;

export default function TabHeader({
  title,
  css,
  handleClick,
  isActive,
  index,
}: {
  title: string;
  css: string;
  handleClick: (index: number) => void;
  isActive: boolean;
  index: number;
}) {
  return (
    <HeaderContainer
      css={css}
      onClick={() => handleClick(index)}
      isActive={isActive}
      index={index}
    >
      <h5>{title}</h5>
    </HeaderContainer>
  );
}
