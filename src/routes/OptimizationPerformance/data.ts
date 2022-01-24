export const optimizationExample = [
  {
    title: 'initial state (Class component)',
    code: `
constructor(props){
  super(props);

  this.state ={
    isEditMode: false,
    applyCoupon: props.applyCoupon // not single source of truth
  }
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const optimizationSecondExample = [
  {
    title: 'spreading props',
    code: `
const CommentsText = props => {
   return (
     <div {...props}>
       {props.text}
     </div>
   );
 };
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const optimizationThirdExample = [
  {
    title: 'inline function definition',
    code: `
<Component onCLick={() => {
  handleClick();
  secondFn();
  console.log(‘please define a function instead of putting everything inline ..’);
}} />
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const optimizationFourthExample = [
  {
    title: 'better import example',
    code: `
import Button from '@mui/material/Button';
// Please DO NOT DO below line:
import { Button } from '@mui/material;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
