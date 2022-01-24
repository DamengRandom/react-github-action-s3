import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import {
  reduxExample,
  reduxPoints,
  reduxSecondExample,
  reduxThirdExample,
} from './data';

export default function Redux() {
  return (
    <Layout id="redux">
      <h3 class="page-header">Redux</h3>
      <h4 class="page-points-header">Concept</h4>
      <i>Personally, my favorite React State management tool.</i>
      <p>
        Please checkout and understand the redux{' '}
        <a
          class="link"
          href="https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-application-data-flow"
          target="_blank"
        >
          workflow
        </a>
        <p class="page-points-header">Example</p>
        <CodeBlockTab contents={reduxExample} />
      </p>
      <p>
        <a
          class="link"
          href="https://github.com/DamengRandom/react-redux-typescipt"
          target="_blank"
        >
          One example
        </a>{' '}
        built by me
      </p>
      <p>
        For some simple cases, it is easier to take advantage of localStorage to{' '}
        <a
          class="link"
          href="https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage"
          target="_blank"
        >
          persist the redux state
        </a>
      </p>
      <br />
      <p class="page-points-header">
        Redux toolkit (RTK) [favorite at 2021] [reason: easy to be used]
      </p>
      <CodeBlockTab contents={reduxSecondExample} />
      <p>Redux toolkit (RTK) Advantages:</p>
      <PointsList data={reduxPoints} />
      <p>What is RTK query: Elegant way to handle async fetch calls</p>
      <CodeBlockTab contents={reduxThirdExample} />
    </Layout>
  );
}
