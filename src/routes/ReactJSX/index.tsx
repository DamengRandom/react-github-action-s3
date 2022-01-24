import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import { tabContents, whatJSX, whyJSX } from './data';

export default function ReactJSX() {
  return (
    <Layout id="jsx">
      <h3 class="page-header">JSX</h3>
      <h4 class="page-points-header">What is JSX?</h4>
      <PointsList data={whatJSX} />
      <CodeBlockTab contents={tabContents} />
      <h4 class="page-points-header">Why JSX?</h4>
      <PointsList data={whyJSX} />
    </Layout>
  );
}
