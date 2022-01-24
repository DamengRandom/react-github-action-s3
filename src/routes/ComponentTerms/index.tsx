import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import {
  classComponentExample,
  classComponentPoints,
  containerComponentExample,
  containerComponentPoints,
  controlledComponentExample,
  controlledComponentPoints,
  functionalComponentExample,
  functionalComponentPoints,
  hocComponentExample,
  hocComponentPoints,
  hocComponentSecondExample,
  PresentationalComponentExample,
  presentationalComponentPoints,
  pureComponentExample,
  pureComponentPoints,
  statefulComponentPoints,
  statelessComponentPoints,
  uncontrolledComponentExample,
  uncontrolledComponentPoints,
} from './data';

export default function ComponentTerms() {
  return (
    <Layout id="component-terms">
      <h3 class="page-header">Components Terminologies</h3>
      <h4 class="page-points-header">Class Component</h4>
      <PointsList data={classComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={classComponentExample} />
      <h4 class="page-points-header">Function Component</h4>
      <PointsList data={functionalComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={functionalComponentExample} />
      <h4 class="page-points-header">Pure Component</h4>
      <PointsList data={pureComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={pureComponentExample} />
      <h4 class="page-points-header">Presentational Component</h4>
      <PointsList data={presentationalComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={PresentationalComponentExample} />
      <h4 class="page-points-header">Container Component</h4>
      <PointsList data={containerComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={containerComponentExample} />
      <h4 class="page-points-header">High Order Component (HOC)</h4>
      <PointsList data={hocComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={hocComponentExample} />
      <p>Example 2</p>
      <CodeBlockTab contents={hocComponentSecondExample} />
      <a
        href="https://dev.to/gethackteam/from-higher-order-components-hoc-to-react-hooks-2bm9"
        target="_blank"
      >
        A HOC Reference
      </a>
      <h4 class="page-points-header">Controlled Component</h4>
      <PointsList data={controlledComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={controlledComponentExample} />
      <h4 class="page-points-header">Uncontrolled Component</h4>
      <PointsList data={uncontrolledComponentPoints} />
      <p>Example</p>
      <CodeBlockTab contents={uncontrolledComponentExample} />
      <h4 class="page-points-header">Stateless Component</h4>
      <PointsList data={statelessComponentPoints} />
      <h4 class="page-points-header">Stateful Component</h4>
      <PointsList data={statefulComponentPoints} />
    </Layout>
  );
}
