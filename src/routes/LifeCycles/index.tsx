import { h } from 'preact';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import { lifeCyclesDetails, lifeCyclesFlow } from './data';

export default function LifeCycles() {
  return (
    <Layout id="life-cycles">
      <h3 class="page-header">Lifecycle methods</h3>
      <h4 class="page-points-header">
        React lifecycle methods can be categorized as:
      </h4>
      <PointsList data={lifeCyclesFlow} />
      <h4 class="page-points-header">Details explanations</h4>
      <p>
        <strong>constructor: </strong>
        always run first, usually where to set the state and get the props (if
        component has parent component)
      </p>
      <p>
        <strong>getDerivedStateFromProps: </strong>(will get called by following
        situations)
        <PointsList data={lifeCyclesDetails} />
      </p>
      <p>
        <strong>componentWillMount: </strong>
        before component mounts on the DOM (before render() get called) [Note:
        should never make any API request inside this function since DOM was not
        ready yet]
      </p>
      <p>
        <strong>render: </strong>
        make sure the component is rendered / mounted in the DOM properly
      </p>
      <p>
        <strong>componentDidMount: </strong>
        after component has rendered (mounted), usually for API call (eg: fetch
        data)
      </p>
      <p>
        <strong>shouldComponentUpdate: </strong>
        is for developer to control for whether trigger re-rendering component
        or not
      </p>
      <p>
        <strong>componentDidUpdate: </strong>
        It has 2 arguments (`prevProps` `prevState`) to compare with current
        state or props and it normally get triggered when calling this.setState(
        {'{...props}'}) (eg: if previous state is different from current state,
        then trigger data re-fetch)
      </p>
      <p>
        <strong>getSnapshotBeforeUpdate: </strong>
        this method gets called before virtual DOM starts to update the DOM
        based on state change
      </p>
      <p>
        <strong>componentWillUnmount: </strong>
        for unmount a component for avoiding memory leak issue
      </p>
    </Layout>
  );
}
