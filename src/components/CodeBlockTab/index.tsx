import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import styled from 'styled-components';
import { IContents, IContentsList } from './interfaces';
import TabContent from './TabContent';
import TabHeader from './TabHeader';

const TabHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.8rem;

  pre {
    font-size: 0.8rem;
  }
`;

const TabContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8rem;
`;

export default function CodeBlockTab({ contents }: IContentsList) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveTabIndex(activeTabIndex === index ? -1 : index);
  };

  return (
    <Fragment>
      <TabHeaderWrapper>
        {contents.map(({ title, headingCss }: IContents, index: number) => (
          <TabHeader
            key={`TabHeader-${index}-${title}`}
            title={title}
            isActive={activeTabIndex === index}
            handleClick={handleClick}
            index={index}
            css={headingCss}
          />
        ))}
      </TabHeaderWrapper>
      <TabContentWrapper>
        {contents.map(
          ({ title, code, contentCss }: IContents, index: number) => (
            <TabContent
              key={`TabContent-${index}-${title}`}
              code={code}
              isActive={activeTabIndex === index}
              css={contentCss}
            />
          )
        )}
      </TabContentWrapper>
    </Fragment>
  );
}
