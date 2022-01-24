export const reconciliationDiffiPoints = [
  'to compare the old node with new node and if old DOM is different with new DOM, then update the old DOM to new DOM.',
  'if the element type has been changed, react will destroy the old DOM and create the new element',
  'purpose of using Diffi algorithm: make components update predictable and enhance the performance of app',
  'how to check the difference:',
  '- different node element (div -> span)',
  '- different element keys (<div key="uniqueKey1"></> -> <div key="uniqueKey2"></>)',
];

export const reconciliationFiberPoints = [
  'can be treated as a data structure which represents some work to do, work can be update DOM and etc ',
  'Fiber has its own Fiber nodes tree, from parent to child, always updating the deepest node before higher level nodes (leafs before root !!)',
  'You can treat a Fiber tree as a Christmas tree with bubbles on it, when bubbles light on, means nodes will get updated !!',
  'Fiber algorithm has 2 stages, render stage and commit stage:',
  '- render: for creating a tree of Fiber nodes marked with side effects (can be performed asynchronously)',
  '- commit: update the DOM and calls pre and post mutation lifecycle methods (must be synchronous process)',
];
