import { h } from 'preact';
import { Route, Router } from 'preact-router';
import Accessibility from '../../routes/Accessibility';
import CodeSplitting from '../../routes/CodeSplitting';
import ComponentTerms from '../../routes/ComponentTerms';
import ContextAPI from '../../routes/ContextAPI';
import ErrorBoundary from '../../routes/ErrorBoundary';
import ForwardingRefs from '../../routes/ForwardingRefs';
import Hooks from '../../routes/Hooks';
import LifeCycles from '../../routes/LifeCycles';
import OneWord from '../../routes/OneWord';
import OptimizationPerformance from '../../routes/OptimizationPerformance';
import PropsStates from '../../routes/PropsStates';
import ReactJSX from '../../routes/ReactJSX';
import Reconciliation from '../../routes/Reconciliation';
import Redux from '../../routes/Redux';
import RenderElements from '../../routes/RenderElements';
import SmallTopics from '../../routes/SmallTopics';
import SyntheticEvents from '../../routes/SyntheticEvents';
import ParticlesTrial from '../ParticlesTrial';

export default function Routes() {
  return (
    <Router>
      <Route path="/accessibility" component={Accessibility} />
      <Route path="/code-splitting" component={CodeSplitting} />
      <Route path="/components" component={ComponentTerms} />
      <Route path="/context-api" component={ContextAPI} />
      <Route path="/" component={ParticlesTrial} />
      <Route path="/error-boundary" component={ErrorBoundary} />
      <Route path="/forwarding-refs" component={ForwardingRefs} />
      <Route path="/hooks" component={Hooks} />
      <Route path="/life-cycles" component={LifeCycles} />
      <Route path="one-word" component={OneWord} />
      <Route
        path="/optimization-performance"
        component={OptimizationPerformance}
      />
      <Route path="/props-states" component={PropsStates} />
      <Route path="/props-states-loaded" component={PropsStates} />
      <Route path="/jsx" component={ReactJSX} />
      <Route path="/reconciliation" component={Reconciliation} />
      <Route path="/redux" component={Redux} />
      <Route path="/render-elements" component={RenderElements} />
      <Route path="/small-topics" component={SmallTopics} />
      <Route path="/synthetic-events" component={SyntheticEvents} />
    </Router>
  );
}
