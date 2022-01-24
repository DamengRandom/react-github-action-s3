import { h } from 'preact';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import { accessibilityPoints } from './data';

export default function Accessibility() {
  return (
    <Layout id="accessibility">
      <h3 class="page-header">Accessibility</h3>
      <h4 class="page-points-header">Accessibility (also called as a11y)</h4>
      <p>
        All aria-* HTML attributes are supported in JSX, eg:{' '}
        {'aria-label={labelText}'}
      </p>
      <p>Tools for check accessibility for your app:</p>
      <br />
      <PointsList data={accessibilityPoints} />
      <p>
        Using landmark HTML tags, such as {'<main /> <aside />'} to allow user
        to quickly to navigate to these sections
      </p>
    </Layout>
  );
}
