import { h } from 'preact';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import { pointsList } from './data';

export default function PropsStates() {
  return (
    <Layout id="props-states">
      <h3 class="page-header">One Word Note</h3>
      <h4 class="page-points-header">Shorter explanations</h4>
      <PointsList data={pointsList} />
    </Layout>
  );
}
