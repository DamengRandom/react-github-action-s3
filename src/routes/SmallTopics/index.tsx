import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import {
  smallTopicsExample,
  smallTopicsFourthExample,
  smallTopicsPoints,
  smallTopicsSecondExample,
  smallTopicsThirdExample,
} from './data';

export default function SmallTopics() {
  return (
    <Layout id="small-topics">
      <h3 class="page-header">Small Topics</h3>
      <ol class="ordered-list">
        <li>
          <h4 class="page-points-header">React without JSX</h4>
          <p>
            Again, JSX made developers life easier, as you can see from the
            syntax:
          </p>
          <CodeBlockTab contents={smallTopicsExample} />
        </li>
        <li>
          <h4 class="page-points-header">Type-checking</h4>
          <p>
            Few ways to do: (1). Npm package: prop-types (2) using typescript
          </p>
        </li>
        <li>
          <h4 class="page-points-header">Render props</h4>
          <p>
            In React, we can pass props to child level components, props can be
            function or jsx or values (string, number, boolean)
          </p>
          <CodeBlockTab contents={smallTopicsSecondExample} />
        </li>
        <li>
          <h4 class="page-points-header">How React support older browser</h4>
          <p>React is using `core-js` to support old browsers, like: IE11</p>
        </li>
        <li>
          <h4 class="page-points-header">Composition {'&'} inheritance</h4>
          <p>
            In React, we can {'{props.children}'} to pass JSX block into next
            component, eg:
          </p>
          <CodeBlockTab contents={smallTopicsThirdExample} />
        </li>
        <li>
          <h4>Condition rendering ({'&&'} operator)</h4>
          <CodeBlockTab contents={smallTopicsFourthExample} />
        </li>
        <li>
          <h4 class="page-points-header"> Toolkit for React projects</h4>
          {/* <PointsList data={smallTopicsPoints} /> */}
          <ul>
            {smallTopicsPoints.map(({ title, link }) => (
              <li key={`toolkit-${title}`}>
                <a href={link} target="_blank">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </Layout>
  );
}
