export const hooksPoints = [
  'Reduced the lines of code React developers needs to do (made elopers life easier, eg: not necessary to write a complex class based component)',
  'Ability to allow developers to build their own functions to handle specific logics, eg: custom hook function',
];

export const hooksExample = [
  {
    title: 'First example',
    code: `
// Most common example:
const [scrollYValue, setScrollY] = useState(0);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Second example',
    code: `
// Avoid to re-create the function as parameter for state, here is an example:
// Render function every time when state changes,

function Table(props) {
  // ⚠️ createRows() is called on every render
  const [rows, setRows] = useState(createRows(props.count));
  // ...
}

Only render function once at initial state stage !!

function Table(props) {
  // ✅ createRows() is only called once
  const [rows, setRows] = useState(() => createRows(props.count));
  // ...
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hooksSecondExample = [
  {
    title: 'First example',
    code: `
// we only want to render component once, eg:

useEffect(() => {
  dispatch(getUsersAction());
}, []);

// no parameters inside [] (square bracket), it means we only render the component once!!
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Second example',
    code: `
// we also can re-render the component when parameter changes/updates, eg:

useEffect(() => {
   callbackRef.current = callback;
   const handler = (event) => callbackRef.current(event);
   element.addEventListener(eventName, handler);
 
   return () => {
     callbackRef.current = null;
     element.removeEventListener(eventName, handler);
   };
 }, [eventName, callback, element]);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Third example',
    code: `
// please DO NOT forgot to do clean up before unmount the component in order to avoid memory leak issue for current component, eg:

const timeCountRef = useRef(0);

timeCountRef.current = setInterval(
  () => setTimeCounter((c) => c + 1),1000);
};
...
useEffect(() => {
  return () => clearInterval(timeCountRef.current);
}, []);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hooksThirdExample = [
  {
    title: 'reducer.js',
    code: `
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

// will move to a constant file (Demo only so make it as one file)
const API_STATES = {
  ERROR: 'error',
  LOADING: 'loading',
  SUCCESS: 'success'
};

// will move to a constant file (Demo only so make it as one file)
const initialState = {
  error: null,
  loading: false,
  posts: []
};

// will move to a reducer file (Demo only so make it as one file)
function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case API_STATES.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case API_STATES.LOADING:
      return {
        ...state,
        loading: true
      };
    case API_STATES.SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts
      };
    default:
      return state;
  }
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'App.js',
    code: `
export default function App() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { posts, error, loading } = state;
 
  useEffect(() => {
    dispatch({ type: API_STATES.LOADING });
    // trigger fetch api call
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (res.status === 200) {
          dispatch({ type: API_STATES.SUCCESS, posts: res.data });
        } else {
          throw Error('Fetch failed ..');
        }
      } catch (error) {
        dispatch({ type: API_STATES.ERROR, error });
      }
    };
  
    fetchPosts();
 }, []);
 
 if (loading) return <p>Loading ...</p>;
 
 // if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
 if (error) return <pre>{JSON.stringify(error?.message, null, 2)}</pre>;
 
 return (
    <div>
      <h3>List of post titles:</h3>
      {posts.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hooksSecondPoints = [
  'pure component, especially always returns the same output like below example !!',
  'When render the specific component quite often',
  'The component is providing same props during re-rendering',
];

export const hooksFourthExample = [
  {
    title: 'moviePropsAreEqual.js',
    code: `
function moviePropsAreEqual(prevMovie, nextMovie) {
 return prevMovie.title === nextMovie.title
   && prevMovie.releaseDate === nextMovie.releaseDate;
}

const MemoizedMovie2 = React.memo(Movie, moviePropsAreEqual);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hooksFifthExample = [
  {
    title: 'CalculateFactorial.js',
    code: `
import { useState, useMemo } from 'react';

export function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);
  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hooksSixthExample = [
  {
    title: 'UseCallbackDemo.js',
    code: `
import React, { useState, useCallback } from 'react';
import ItemListComponent from './UseCallbackSubComponent/ItemListComponent';
 
export default function UseCallbackDemo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  
  const getItems = useCallback(() => {
    return [number, number + 1]
  }, [number]); // detect changes on this arrow function
  // only when creation is very slow, we need useCallback to avoid unnecessary re-rendering for performance handling !!!
  //  when you have some value inside a dependency array eg: [getItems] inside <ItemListComponent /> !!! you need to use the useCallback hook !!!
 
  const theme = {
    backgroundColor: dark ? '#333' : '#ccc',
    color: dark ? '#ccc' : '#333'
  };
 
  const toggleTheme = () => {
    console.log('toggle theme ...');
    setDark(prevDark => !prevDark);
  }
 
  return (
    <div style={theme}>
      <p>useMemo: returns the value of that callback function</p>
      <p>useCallback: returns the callback function</p>
      <div>
        <h5>Example here:</h5>
        <input type="number" value={number} onChange={e => setNumber(+e.target.value)} />
        <button onClick={toggleTheme}>Toggle theme</button>
        <ItemListComponent getItems={getItems} />
      </div>
    </div>
  );
};
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'ItemListComponent.js',
    code: `
import React, { useEffect, useState } from 'react';
 
export default function ItemListComponent({ getItems }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(getItems());
    console.log('updating Items ...');
  }, [getItems]);
  
  return (
    <div>
      {items.map(item => <div key={item}>{item}</div>)}
    </div>
  );
};
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hooksThirdPoints = [
  'For tracking input field value',
  'For making current field focusable',
  'Interacting with third party libraries',
];

export const hooksSeventhExample = [
  {
    title: 'simple Syntax.js',
    code: `
const refContainer = useRef(initialValue);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'UseRefTimeWatch.js',
    code: `
import React, { useRef, useState, useEffect } from "react";

export default function UseRefTimeWatch() {
  const timeCountRef = useRef(0);
  const [timeCounter, setTimeCounter] = useState(0);

  const startCounting = () => {
  if (timeCountRef.current) return;

  timeCountRef.current = setInterval(
    () => setTimeCounter((c) => c + 1), 1000);
  };

  const stopCounting = () => {
    clearInterval(timeCountRef.current);
    timeCountRef.current = 0;
  };

  const resetCounting = () => {
    setTimeCounter(0);
  };

  useEffect(() => {
    return () => clearInterval(timeCountRef.current);
  }, []);

  return (
    <div>
      <h4>Timer: {timeCounter}</h4>
      <div>
        <button onClick={startCounting}>Start</button>
        <button onClick={stopCounting}>Stop</button>
        <button onClick={resetCounting}>Reset</button>
      </div>
    </div>
  );
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const hooksEighthExample = [
  {
    title: 'useToggle.js',
    code: `
import { useState } from 'react';

interface IDefaultToggleValue {
  defaultValue: Any;
}

export default function useToggle(defaultValue: Any): [IDefaultToggleValue, (param: IDefaultToggleValue) => void] {
  const [value, setValue] = useState(defaultValue);

  function toggleState(param: IDefaultToggleValue) {
    setValue((prevState: IDefaultToggleValue) => (typeof param === 'boolean' ? param : !prevState));
  }

  return [value, toggleState];
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
