import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import { forwardingRefsExample } from './data';

export default function ForwardingRefs() {
  return (
    <Layout id="forwarding-refs">
      <h3 class="page-header">Forwarding Refs</h3>
      <h4 class="page-points-header">Concept</h4>
      <p>
        One word: It’s a feature to let components to take a ref they receive
        and pass it further down to a child component
      </p>
      <h4 class="page-points-header">Example</h4>
      <CodeBlockTab contents={forwardingRefsExample} />
    </Layout>
  );
}
