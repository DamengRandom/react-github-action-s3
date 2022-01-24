import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import {
  contextApiExample,
  contextApiPointsExample,
  contextApiSecondExample,
} from './data';

export default function ContextAPI() {
  return (
    <Layout id="context-api">
      <h3 class="page-header">Context API</h3>
      <h4 class="page-points-header">Concept</h4>
      <PointsList data={contextApiPointsExample} />
      <p>Conceptual example:</p>
      <CodeBlockTab contents={contextApiExample} />
      <h4 class="page-points-header">How? (Example)</h4>
      <CodeBlockTab contents={contextApiSecondExample} />
    </Layout>
  );
}
