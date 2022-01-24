import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import { clientSideRenderingExample, serverSideRenderingExample } from './data';

export default function RenderElements() {
  return (
    <Layout id="render-elements">
      <h3 class="page-header">Render Elements</h3>
      <h4 class="page-points-header">ReactDOM.render()</h4>
      <p>
        normal render React elements into the DOM, typically render the React
        contents from client/browser side [for SPA (Single Page Application)]
      </p>
      <br />
      <h4 class="page-points-header">ReactDOM.hydrate()</h4>
      <p>
        html contents were rendered by ReactDOMServer API, typically for
        rendering react content from server side [Dedicate for SSR (Server Side
        Rendering)]
      </p>
      <br />
      <h4 class="page-points-header">Client Side Rendering (CSR) Example</h4>
      <CodeBlockTab contents={clientSideRenderingExample} />
      <h4 class="page-points-header">Server Side Rendering (SSR) Example</h4>
      <CodeBlockTab contents={serverSideRenderingExample} />
      <a
        href="https://medium.com/@akakankur81/a-quick-overview-on-react-dom-render-and-hydrate-6d0ec6c1b234"
        target="_blank"
        class="link"
      >
        Example Code
      </a>
    </Layout>
  );
}
