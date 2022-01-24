export const syntheticEventsPoints = [
  'It is the React event system, how React handles with DOM events, such as click, change and etc',
  'It’s like a wrapper for native DOM events, and for handling events in React',
  'In version 17, no Event Pooling available -> (https://reactjs.org/blog/2020/08/10/react-v17-rc.html#no-event-pooling)',
];

export const syntheticEventsExample = [
  {
    title: 'Synthetic events Example',
    code: `
<Box
     onClick={() => {
       seCardValue(product.name);
     }}
   >
...
</Box>
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Synthetic events attributes list',
    code: `
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
