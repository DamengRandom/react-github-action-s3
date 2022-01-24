export const forwardingRefsExample = [
  {
    title: 'InputWrapper.jsx',
    code: `
import React from "react";

const ForwardInput = React.forwardRef((props, ref) => {
 return (
   <input
     {...props}
     ref={ref}
     name="forwardInput"
     placeholder="trigger input focus effect by clicking button"
   />
 );
});
 
export class InputWrapper extends React.Component {
 constructor(props) {
   super(props);
   this.handleClick = this.handleClick.bind(this);
 }
 
 inputRef = React.createRef();
 
 handleClick() {
   this.inputRef.current.focus();
 }
 
 render() {
   return (
     <div>
       <ForwardInput ref={this.inputRef} />
       <button onClick={this.handleClick}>Click me to focus on input</button>
     </div>
   );
 }
}
 
export default InputWrapper;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
