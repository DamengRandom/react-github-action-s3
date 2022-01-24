import { h } from 'preact';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import { reconciliationDiffiPoints, reconciliationFiberPoints } from './data';

export default function Reconciliation() {
  return (
    <Layout id="reconciliation">
      <h3 class="page-header">Reconciliation</h3>
      <h4 class="page-points-header">Concept</h4>
      <p>
        This is the core part of how React works, about reconciliation, we have
        algorithms: <strong>Diffi</strong> {'&'} Fiber. Simple word to
        summarize: <strong>Diffi</strong> (React 15) {'->'} Fiber (React 16
        above)
      </p>
      <p>
        The substantial point of the <strong>Diffi</strong> algorithm is to do
        iterations for virtual DOM tree and actual DOM tree, and find the
        difference and update it !!
      </p>
      <h4 class="page-points-header">For React 15, we have</h4>
      <p>
        <strong>Tree diff</strong>: based on DOM trees hierarchy to traverse old
        and new trees, find the difference and update it.
      </p>
      <p>
        <strong>Component Diff</strong>: compare component type, if it is
        different, then remove the old component and insert the new component.
      </p>
      <p>
        <strong>Element Diff</strong>: according to key, find the DOM node which
        needs to be updated and update the DOM.
      </p>
      <h4 class="page-points-header">
        For React 16, we have <strong>Fiber</strong> algorithm, it has 2 stages:
      </h4>
      <p>
        <strong>render</strong>: generate Fiber tree with side effects (save
        node state information which need to be updated into effect list) [can
        be asynchronous] (Fiber tree: substantially is a linked list)
      </p>
      <p>
        <strong>commit</strong>: update DOM [Only be synchronous
      </p>
      <h4 class="page-points-header">
        A bit more details about Diffi and Fiber
      </h4>
      <p>(1). Diffi algorithm:</p>
      <PointsList data={reconciliationDiffiPoints} />
      <p>(2). Fiber algorithm: a new reconciliation algorithm for React 16</p>
      <PointsList data={reconciliationFiberPoints} />
      <h4 class="page-points-header">References</h4>
      <a
        class="link"
        href="https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react"
        target="_blank"
      >
        Fiber in depth
      </a>
      <br />
      <a
        class="link"
        href="https://www.velotio.com/engineering-blog/react-fiber-algorithm"
        target="_blank"
      >
        React Fiber algorithm
      </a>
      <br />
      <a
        class="link"
        href="https://reactjs.org/docs/reconciliation.html"
        target="_blank"
      >
        Reconciliation
      </a>
    </Layout>
  );
}
