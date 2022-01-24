import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import { syntheticEventsExample, syntheticEventsPoints } from './data';

export default function SyntheticEvents() {
  return (
    <Layout id="synthetic-events">
      <h3 class="page-header">Synthetic Events</h3>
      <h4 class="page-points-header">What is Synthetic Events?</h4>
      <PointsList data={syntheticEventsPoints} />
      <h4 class="page-points-header">Example</h4>
      <CodeBlockTab contents={syntheticEventsExample} />
    </Layout>
  );
}
