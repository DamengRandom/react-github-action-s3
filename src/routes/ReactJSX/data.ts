export const tabContents = [
  {
    title: 'Without JSX',
    code: `
const es6El = React.createElement('p', {}, 'Hi there ..'); // without JSX, headache
ReactDOM.render(es6El, document.getElementById('root'));
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'With JSX',
    code: `
const jsxEl = <p>Hi there ..</p>;
ReactDOM.render(jsxEl, document.getElementById('root')); // life is easier ..
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const whatJSX = [
  'JSX stands for JavaScript XML',
  'JSX allows us to write HTML in React',
  `JSX made our life easier because we don't need to use \`createElement()\` or \`appendChild()\` to add HTML into DOM.`,
];

export const whyJSX = [
  'Good visual aid, especially for code readability',
  'Show more useful error and warning messages',
];
