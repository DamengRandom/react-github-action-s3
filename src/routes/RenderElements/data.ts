export const clientSideRenderingExample = [
  {
    title: 'Aloha.jsx',
    code: `
import React from 'react';

const Aloha = (props) => (
  <div>
    <h1>Aloha, {props.word}</h1>
  </div>
);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'App.jsx',
    code: `
import React from 'react';
import ReactDOM from 'react-dom';
import Aloha from './components/Aloha';

ReactDOM.render(<Aloha word={word} />, document.getElementById('root'));
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const serverSideRenderingExample = [
  {
    title: 'Aloha.jsx',
    code: `
import React from 'react';

const Aloha = (props) => (
  <div>
    <h1>Aloha, {props.word}</h1>
  </div>
);

export default Aloha;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'App.jsx',
    code: `
import React from 'react';
import ReactDOM from 'react-dom';
import Aloha from './components/Aloha';

ReactDOM.hydrate(<Aloha word={word} />, document.getElementById('root'));
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'server.js',
    code: `
import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Aloha from './public/compoennts/Aloha';

const app = express();

app.use('./static', express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  const word = 'Damon !!';

  const component = ReactDOMServer.renderToString(<Aloha word={word} />);

  res.send(component);
});

app.listen(3100, () => {
  console.log('Server is running on PORT: 3100');
});
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
