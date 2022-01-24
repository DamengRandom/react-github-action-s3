export const classComponentPoints = [
  'got lifecycle functions',
  'has constructor() function, and running order could be run constructor() then render()',
  'stateful components',
  'defined by `class` keyword',
  'need to bind(this) for your function(s) inside class component',
  'typically: this.state, this.props',
  'write more code, especially when lifecycle functions introduced',
];

export const classComponentExample = [
  {
    title: 'Class component',
    code: `
class ClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {classStateExample: true};
  }

	render() {
    return (<JSX />);
  }
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const functionalComponentPoints = [
  'use hooks (eg: useEffect) to represent lifecycle methods',
  'NO constructor() & render() function',
  'stateless components',
  'defined by using `function` keyword, can be treated as javascript function',
  'shorter syntax and code is easier to be read',
];

export const functionalComponentExample = [
  {
    title: 'Functional component',
    code: `
const FunctionalComponent = () => {
	const [functionalState, setFunctionalState] = useState(true);

	return (<JSX/>);
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const pureComponentPoints = [
  '`React.PureComponent` makes the component `NOT` getting re-rendered !!',
  '`React.PureComponent` implements `shouldComponentUpdate()` method',
  'Knowledge recall: `pure function`: a function which always get same typed results when same typed argument(s) passed !!',
  'Why we use `PureComponent`? Avoid unnecessary re-renders for the component and enhance the performance ..',
  'When do we use `PureComponent`? When the time we do `NOT` want to re-render the component !!',
];

export const pureComponentExample = [
  {
    title: 'Pure component',
    code: `
import React from "react";
 
class FirstChildComponent extends React.PureComponent {
 render() {
   return console.log("FirstChildComponent") || <div>{this.props.value}</div>;
 }
}
 
export default FirstChildComponent;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const presentationalComponentPoints = [
  'How things look',
  'Can be stateless or stateful, but tend to be stateless (more like receive data)',
];

export const PresentationalComponentExample = [
  {
    title: 'Presentational component',
    code: `
import React from "react";
 
class SecondChildComponent extends React.Component {
 render() {
   return console.log("SecondChildComponent") || <div>{this.props.value}</div>;
 }
}
 
export default SecondChildComponent;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const containerComponentPoints = [
  'How things work',
  'Can be stateless or stateful, but tend to be stateful (more like providing data)',
];

export const containerComponentExample = [
  {
    title: 'Container component',
    code: `
import React from "react";
import FirstChildComponent from "./FirstChildComponent";
import SecondChildComponent from "./SecondChildComponent";
 
class ParentComponent extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     value: "name"
     // if we change value to 1
     // both child components get re-rendered
   };
 }
 
 componentDidMount() {
   setInterval(() => {
     this.setState({
       value: "name value"
       // if we change the value to this.state.value + 1
       // both child components get re-rendered
     });
   }, 2000);
 }
 
 render() {
   return (
     <div>
       <FirstChildComponent value={this.state.value} />
       <SecondChildComponent value={this.state.value} />
     </div>
   );
 }
}
 
export default ParentComponent;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hocComponentPoints = [
  '`High Order Component (HOC)` concept: basically is for reusing the component logic',
  "Pass an input component as a 'Parameter' and return a new output component.",
  'HOC is same concept with High Order Function in JavaScript',
  '*** Please never use HOC inside render() function ***',
];

export const hocComponentExample = [
  {
    title: 'Todo.js',
    code: `
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(({ id, title }) => (
          <li key={\`todo-\${id}\`}>{title}</li>
        ))}
      </ul>
    )
  }
}

export default Todo;

    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'LoaderHOC.js',
    code: `
import React from "react";
import fetchTodos from '../../utils/fetchTodos';


const LoaderHOC = WrapperComponent => {
  return class LoaderHOC extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        todos: []
      };
    }
    
    componentDidMount(){
      fetchTodos()
        .then(todo => {
          setTimeout(() => {
            this.setState({
              todos: [todo]
            });
          }, 500); // just for shown loading effect
        });
    }

    render() {
      return this.state.todos.length === 0 ? (
        <p>Loading ..</p>
      ) : (
        <WrapperComponent todos={this.state.todos} />
      );
    }
  };
};

export default LoaderHOC;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'TodosWrapper.js',
    code: `
import React from 'react';
import LoaderHOC from './LoaderHOC';
import Todo from './Todo';

class TodosWrapper extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <Todo todos={this.props.todos} />
    );
  }
}

export default LoaderHOC(TodosWrapper);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'App.js',
    code: `
import React from "react";
import "./style.css";
import TodosWrapper from './Components/TodosWrapper';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <TodosWrapper />
    </div>
  );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hocComponentSecondExample = [
  {
    title: 'HOC/LoaderHOC.js',
    code: `
import { Component } from "react";

const LoaderHOC = (WrapperComponent) => {
  return class LoaderHOC extends Component {
    render() {
      return this.props.users.length === 0 ? (
        <p>Loading ...</p>
      ) : (
        <WrapperComponent {...this.props} />
      );
    }
  };
};

export default LoaderHOC;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'src/Users.js',
    code: `
import { Component } from "react";
import LoaderHOC from "../HOC/LoaderHOC";

class Users extends Component {
  constructor(props) {
    super(props);
    console.log("hi:", this.props);
    this.state = {
      users: this.props.users || []
    };
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user, index) => (
          <li key={user.id + index}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default LoaderHOC(Users);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'src/App.js',
    code: `
import "./styles.css";
import { Component } from "react";
import Users from "./Users";

const url = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  getUsers() {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          users: data
        });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
        {/* {JSON.stringify(users, null, 2)} */}
      </div>
    );
  }
}

export default App;
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'src/index.js',
    code: `
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const controlledComponentPoints = [
  'the form field is controlled by React (Recommended)',
];

export const controlledComponentExample = [
  {
    title: 'Controlled component example',
    code: `
this.state = {value: ''};
this.setState({value: event.target.value});

<input type="text" value={this.state.value} onChange={this.handleChange} />
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const uncontrolledComponentPoints = [
  'the form field is controlled by DOM itself',
];

export const uncontrolledComponentExample = [
  {
    title: 'Uncontrolled component example',
    code: `
this.input = React.createRef();
alert('A name was submitted: ' + this.input.current.value);

<input type="text" ref={this.input} />
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const statelessComponentPoints = [
  'can only have props, cannot have "this.state</i>"',
  'Also known as: stateless/presentational/dumb components',
];

export const statefulComponentPoints = [
  'can have props and states',
  'Also known as: stateful/container/smart components',
];
