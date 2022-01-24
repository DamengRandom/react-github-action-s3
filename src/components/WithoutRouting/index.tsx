import './index.css';
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import Accessibility from '../../routes/Accessibility';
import CodeSplitting from '../../routes/CodeSplitting';
import ComponentTerms from '../../routes/ComponentTerms';
import ContextAPI from '../../routes/ContextAPI';
import ErrorBoundary from '../../routes/ErrorBoundary';
import ForwardingRefs from '../../routes/ForwardingRefs';
import Hooks from '../../routes/Hooks';
import LifeCycles from '../../routes/LifeCycles';
import OptimizationPerformance from '../../routes/OptimizationPerformance';
import PropsStates from '../../routes/PropsStates';
import ReactJSX from '../../routes/ReactJSX';
import Reconciliation from '../../routes/Reconciliation';
import Redux from '../../routes/Redux';
import RenderElements from '../../routes/RenderElements';
import SmallTopics from '../../routes/SmallTopics';
import SyntheticEvents from '../../routes/SyntheticEvents';
import Dashboard from '../../routes/Dashboard';

export default function App() {
  const [link, setLink] = useState('/');
  const currentContent = (selectedLink: string) => {
    switch (selectedLink) {
      case '/props-states':
        return <PropsStates />;
      case '/jsx':
        return <ReactJSX />;
      case '/render-elements':
        return <RenderElements />;
      case '/component-terms':
        return <ComponentTerms />;
      case '/life-cycles':
        return <LifeCycles />;
      case '/synthetic-events':
        return <SyntheticEvents />;
      case '/accessibility':
        return <Accessibility />;
      case '/context-api':
        return <ContextAPI />;
      case '/code-splitting':
        return <CodeSplitting />;
      case '/error-boundary':
        return <ErrorBoundary />;
      case '/forwarding-refs':
        return <ForwardingRefs />;
      case '/optimization-performance':
        return <OptimizationPerformance />;
      case '/reconciliation':
        return <Reconciliation />;
      case '/hooks':
        return <Hooks />;
      case '/redux':
        return <Redux />;
      case '/small-topics':
        return <SmallTopics />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <Fragment>
      <nav>
        <button type="text" onClick={() => setLink('/')}>
          Dashboard
        </button>
        <button type="text" onClick={() => setLink('/props-states')}>
          Props And States
        </button>
        <button type="text" onClick={() => setLink('/jsx')}>
          JSX
        </button>
        <button type="text" onClick={() => setLink('/render-elements')}>
          Render Elements
        </button>
        <button type="text" onClick={() => setLink('/component-terms')}>
          Component Terminologies
        </button>
        <button type="text" onClick={() => setLink('/life-cycles')}>
          LifeCycles methods
        </button>
        <button type="text" onClick={() => setLink('/synthetic-events')}>
          Synthetic Events
        </button>
        <button type="text" onClick={() => setLink('/accessibility')}>
          Accessibility
        </button>
        <button type="text" onClick={() => setLink('/context-api')}>
          Context API
        </button>
        <button type="text" onClick={() => setLink('/code-splitting')}>
          Code Splitting
        </button>
        <button type="text" onClick={() => setLink('/error-boundary')}>
          Error Boundary
        </button>
        <button type="text" onClick={() => setLink('/forwarding-refs')}>
          Forwarding Refs
        </button>
        <button
          type="text"
          onClick={() => setLink('/optimization-performance')}
        >
          Optimization Performance
        </button>
        <button type="text" onClick={() => setLink('/reconciliation')}>
          Reconciliation
        </button>
        <button type="text" onClick={() => setLink('/hooks')}>
          Hooks
        </button>
        <button type="text" onClick={() => setLink('/redux')}>
          Redux
        </button>
        <button type="text" onClick={() => setLink('/small-topics')}>
          SmallTopics
        </button>
      </nav>
      <main>{currentContent(link)}</main>
    </Fragment>
  );
}
