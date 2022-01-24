import { h } from 'preact';
import styled from 'styled-components';
import { pointIcons } from '../../utils/iconsList';

const List = styled.ul`
  padding-left: 0rem;
  list-style: none;
  margin-bottom: 1rem;

  & > li {
    line-height: 1.8rem;
  }

  & > li:before {
    padding-right: 0.4rem;
    content: ${(props: { icon: string }) => `"${props.icon}"`};
  }
`;

export default function PointsList({ data }: { data: Array<string> }) {
  const randomIcon = pointIcons[Math.floor(Math.random() * pointIcons.length)];

  return (
    <List icon={randomIcon}>
      {data.map((d: string, index: number) => (
        <li key={`${index}-${d}`}>{d}</li>
      ))}
    </List>
  );
}
