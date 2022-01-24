export const smallTopicsExample = [
  {
    title: 'With JSX',
    code: `
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Without JSX',
    code: `
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, \`Hello \${this.props.toWhat}\`);
  }
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const smallTopicsSecondExample = [
  {
    title: 'Typical example',
    code: `
<Mouse children={mouse => (
  <p>The mouse position is {mouse.x}, {mouse.y}</p>
)}/>
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const smallTopicsThirdExample = [
  {
    title: 'BorderWithColor.js',
    code: `
function BorderWithColor(props) {
 return (
   <div className={'BorderWithColor: ' + props.color}>
     {props.children}
   </div>
 );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'CustomDialog.js',
    code: `
function CustomDialog() {
 return (
   <BorderWithColor color="blue">
     <h1 className="Dialog-title">
       Pass content to BorderWithColor
     </h1>
     <p className="Dialog-message">
       This is a typical composition inheritance [props.children] example
     </p>
   </BorderWithColor>
 );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const smallTopicsFourthExample = [
  {
    title: '&& operator',
    code: `
{message.length > 0 &&
  <h2>
    You have {message.length} unread messages.
  </h2>
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const smallTopicsPoints = [
  {
    title: 'SPA: create-react-app',
    link: 'https://create-react-app.dev/docs/getting-started/',
  },
  {
    title: 'SSR: next.js',
    link: 'https://nextjs.org/docs/getting-started',
  },
  {
    title: 'JAMStack: Gatsby [for static site] (I don’t like this one !!)',
    link: 'https://www.gatsbyjs.com/docs/',
  },
];
