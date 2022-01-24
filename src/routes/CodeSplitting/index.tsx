import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import { codeSplittingExample, codeSplittingSecondExample } from './data';

export default function CodeSplitting() {
  return (
    <Layout id="code-splitting">
      <h3 class="page-header">Code Splitting</h3>
      <h4 class="page-points-header">Concept</h4>
      <p>
        Code splitting is a concept to help you lazy load the things that are
        currently needed by the user.
      </p>
      <CodeBlockTab contents={codeSplittingExample} />
      <h4 class="page-points-header">Another example of dynamic import</h4>
      <CodeBlockTab contents={codeSplittingSecondExample} />
    </Layout>
  );
}
