export const errorBoundaryPoints = [
  'Asynchronous (eg: callback functions)',
  'Event handlers',
  'Server Side Rendering (SSR)',
];

export const errorBoundaryFirstPoints = [
  'The error boundaries feature was introduced in React 16, which handles UI components error.',
  'Purpose: UI should not break the entire app !!',
  'Things no covered by error boundaries:',
];

export const errorBoundaryExample = [
  {
    title: 'ErrorBoundary.tsx',
    code: `
import React, { Component } from "react";
 
export default class ErrorBoundary extends Component {
 constructor(props) {
   super(props);
 
   this.state = { error: null, errorInfo: null };
 }
 
 componentDidCatch(error, errorInfo) {
   this.setState({ error, errorInfo });
 }
 
 render() {
   if (this.state.errorInfo)
     return (
       <details>
         <h3>Something went wrong ..</h3>
         <p>{this.state.error?.toString()}</p>
         <p>{this.state.errorInfo?.componentStack}</p>
       </details>
     );
   return this.props.children;
 }
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Counter.tsx',
    code: `
import React from "react";
 
export default function Counter({ count, setCount }) {
 if (count === 5) throw new Error("Counter is 5. Error occurred."); // try to create an error and make UI down ..
 return (
   <div>
     <span>Count: {count}</span>{" "}
     <button onClick={() => setCount(count + 1)}>+</button>
   </div>
 );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'index.tsx',
    code: `
import React from "react";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";
 
export default function ErrorBoundaryFunctionalComponent() {
 const [count, setCount] = React.useState(0);
 return (
   <div>
     <h4>Error Boundary example for functional component:</h4>
     <ErrorBoundary>
       <Counter count={count} setCount={setCount} />
     </ErrorBoundary>
   </div>
 );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
