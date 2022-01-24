import { h, JSX } from 'preact';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const ContentContainer = styled.div`
  ${(props: { css: string }) => props.css};
  cursor: default;

  pre {
    font-size: 0.8rem !important;
  }
`;

export default function TabContent({
  code,
  css,
  isActive,
}: {
  code: string;
  css: string;
  isActive: boolean;
}): JSX.Element | null {
  let clickCounter: number | NodeJS.Timeout;
  const onClick = () => null;
  const onDoubleClick = (event: { detail: number }) => {
    clearTimeout(clickCounter as number);

    if (event.detail === 1) {
      clickCounter = setTimeout(onClick, 100);
    } else if (event.detail === 2) {
      navigator.clipboard.writeText(code);
    } else {
      return;
    }
  };

  return isActive ? (
    <ContentContainer css={css}>
      <SyntaxHighlighter language="javascript" onClick={onDoubleClick}>
        {code}
      </SyntaxHighlighter>
    </ContentContainer>
  ) : null;
}
