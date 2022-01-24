import { Fragment, h } from 'preact';
import { Link } from 'preact-router/match';
import { useEffect } from 'preact/hooks';

export default function Dashboard() {
  useEffect(() => {
    if (window.localStorage.getItem('visitHistory') === '') {
      console.log('initial rendered');
      window.localStorage.setItem('visitHistory', '/start');
    } else {
      window.localStorage.setItem(
        'visitHistory',
        window.localStorage.getItem('visitHistory') + window.location.pathname
      );
    }
  }, [window.location.pathname]);

  const linksList = [
    {
      path: '/props-states',
      text: 'Props & States',
    },
    {
      path: '/jsx',
      text: 'JSX',
    },
    {
      path: '/components',
      text: 'Components Terminologies',
    },
    {
      path: '/render-elements',
      text: 'Render Elements',
    },
    {
      path: '/life-cycles',
      text: 'LifeCycle Methods',
    },
    {
      path: '/synthetic-events',
      text: 'Synthetic Events',
    },
    {
      path: '/accessibility',
      text: 'Accessibility',
    },
    {
      path: '/context-api',
      text: 'Context API',
    },
    {
      path: '/code-splitting',
      text: 'Code Splitting',
    },
    {
      path: '/error-boundary',
      text: 'Error Boundary',
    },
    {
      path: '/forwarding-refs',
      text: 'Forwarding Refs',
    },
    {
      path: '/optimization-performance',
      text: 'Optimization Performance',
    },
    {
      path: '/reconciliation',
      text: 'Reconciliation',
    },
    {
      path: '/hooks',
      text: 'Hook',
    },
    {
      path: '/redux',
      text: 'Redux',
    },
    {
      path: '/small-topics',
      text: 'Small Topics',
    },
    {
      path: '/one-word',
      text: 'One Word Note',
    },
  ];

  return (
    <Fragment>
      <Link
        href="/"
        class="link-no-styling"
        onClick={() => window.localStorage.setItem('visitHistory', '')}
      >
        <h2 class="nav-header">React Note</h2>
      </Link>
      <div
        class={
          window.localStorage.getItem('visitHistory') === ''
            ? 'nav-list nav-list-link-animation'
            : 'nav-list'
        }
      >
        {linksList.map(({ path, text }, index) => (
          <Link href={path} key={`link-${index}`} class="link">
            {text}
          </Link>
        ))}
      </div>
    </Fragment>
  );
}
