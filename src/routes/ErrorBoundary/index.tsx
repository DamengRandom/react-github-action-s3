import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import {
  errorBoundaryExample,
  errorBoundaryFirstPoints,
  errorBoundaryPoints,
} from './data';

export default function ErrorBoundary() {
  return (
    <Layout id="error-boundary">
      <h3 class="page-header">Error Boundary</h3>
      <h4 class="page-points-header">Concept</h4>
      <PointsList data={errorBoundaryFirstPoints} />
      <ul>
        {errorBoundaryPoints.map((point, index) => (
          <li key={`error-boundary-sub-point-${index}`}>{point}</li>
        ))}
      </ul>
      <br />
      <h4 class="page-points-header">Example</h4>
      <CodeBlockTab contents={errorBoundaryExample} />
    </Layout>
  );
}
