import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import { propsExample, propsList, stateExample, statesList } from './data';

export default function PropsStates() {
  return (
    <Layout id="props-states">
      <h3 class="page-header">Props {'&'} States</h3>
      <h4 class="page-points-header">Props</h4>
      <PointsList data={propsList} />
      <p>Example</p>
      <CodeBlockTab contents={propsExample} />
      <h4 class="page-points-header">States</h4>
      <PointsList data={statesList} />
      <p>Example</p>
      <CodeBlockTab contents={stateExample} />
    </Layout>
  );
}
