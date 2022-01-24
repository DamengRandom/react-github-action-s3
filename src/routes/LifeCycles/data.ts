export const lifeCyclesFlow = [
  'Mounting: constructor -> getDerivedStateFromProps -> componentWillMount -> render -> componentDidMount',
  'Updating: shouldComponentUpdate -> getDerivedStateFromProps -> getSnapshotBeforeUpdate -> componentDidUpdate',
  'Unmounting: componentWillUnmount',
];

export const lifeCyclesDetails = [
  '- component is initialized',
  '- receiving new props whether they are getting changes or not',
  '- parent component is re-rendered (Only purpose is enabling for updating internal state as results of changes in props)',
];
