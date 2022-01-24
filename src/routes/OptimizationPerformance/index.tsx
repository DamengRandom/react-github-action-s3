import { h } from 'preact';
import styled from 'styled-components';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import { pointIcons } from '../../utils/iconsList';
import {
  optimizationExample,
  optimizationFourthExample,
  optimizationSecondExample,
  optimizationThirdExample,
} from './data';

const OrderList = styled.ol`
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

export default function OptimizationPerformance() {
  const randomIcon = pointIcons[Math.floor(Math.random() * pointIcons.length)];
  return (
    <Layout id="optimization-performance">
      <h3 class="page-header">Optimization Performance</h3>
      <h4 class="page-points-header">Concept</h4>
      <p>
        In React, we have plenty of ways to improve the performance of
        applications.
      </p>
      <br />
      <OrderList icon={randomIcon}>
        <li>
          Use DRY rule + keep maximum 255 lines of code for the component file
          [reusability {'&'} clean/tidy component structure considerations]
        </li>
        <li>
          Use {'<Fragment>'} or {'<>'} as addition HTML element wrappers
        </li>
        <li>
          Must use {'key={`${mest_be_unique_string}`}'} prop for loop item,
          avoid using index directly as key
        </li>
        <li>Use immutable data structure for predict the data state easily</li>
        <li>
          Avoid passing props as initial state, eg:
          <CodeBlockTab contents={optimizationExample} />
        </li>
        <li>Use useMemo, useCallback to avoid unnecessary re-renders</li>
        <li>Use memo for pure component to avoid unnecessary re-renders</li>
        <li>
          Use selectors function (eg: reselect) instead of directly calling the
          redux state as the whole object, too big to digest (Also avoid
          frequent re-renders !!)
        </li>
        <li>
          Avoid use spreading props on DOM element directly, eg:
          <CodeBlockTab contents={optimizationSecondExample} />
        </li>
        <li>
          Avoid making API call inside componentWillMount() lifecycle method,
          because before render(), component refs and DOM elements cannot be
          rendered
        </li>
        <li>
          Always CSS before JS, eg: CSS animations before JS animation in React
        </li>
        <li>Consider using SSR</li>
        <li>
          Avoid using inline function definition, eg:
          <CodeBlockTab contents={optimizationThirdExample} />
        </li>
        <li>
          Use Code splitting for renderings improvement, also React.lazy (lazy
          loading) [dynamic import]
        </li>
        <li>
          Always import the specific part instead of import entire library, eg:
          <CodeBlockTab contents={optimizationFourthExample} />
        </li>
        <li>
          Use some tools, like lighthouse for accessibility checks before the
          project release, profiler for performance bottlenecks finding and then
          improve it
        </li>
        <li>Use error boundary component to prevent app UI crash</li>
        <li>
          Do NOT forget to setup cleanup function before unmount component, eg:
          return {'() => {}'} inside useEffect hook
        </li>
        <li>
          Please use hooks more, shorter syntax and make code easier to be read
          and maintained
        </li>
        <li>
          Use tools like Redux or MobX or even context API for the project state
          management !!
        </li>
        <li>
          If using webpack, can consider separate development and production
          mode. For instance, try to set up limited functionalities in
          production mode in order to keep the bundle file as small as possible.
          We can put all the fancy trials inside development mode.
        </li>
      </OrderList>
      <h4 class="page-points-header">Bad Example</h4>
      <p>
        Fake performance optimization: useMemo/useCallback [IF not using
        PROPERLY]
      </p>
      <br />
      <a
        href="https://dmitripavlutin.com/dont-overuse-react-usecallback/"
        target="_blank"
      >
        the optimization costs more than not having the optimization.
      </a>
    </Layout>
  );
}
