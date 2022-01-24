export const contextApiExample = [
  {
    title: 'Before',
    code: `
<Parent nestedProp={nestedPropValue}>
	<Child nestedProp={nestedPropValue}>
		<NestedChild nestedProp={nestedPropValue}></NestedChild>
  </Child>
</Parent>
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'After',
    code: `
<ContextExample.Provider value={{ prop: ‘context’ }}>
  <ContextExample.Consumer>
    {prop => (<JSX prop={prop} />)}
  </ContextExample.Consumer>
</ContextExample.Provider>

    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const contextApiSecondExample = [
  {
    title: 'Step 1',
    code: `
// Step 1: Define a context:
import { createContext } from 'react';
export default createContext(null);
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Step 2',
    code: `
// Step 2: set context provider value:
import UserContext from '../src/context/UserContext';
 
<UserContext.Provider value={{ userData, setUserData }}>
 ...
</UserContext.Provider>
 
// complete example:
 
import UserContext from '../src/context/UserContext';
 
export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  
  useEffect(() => {
    const checkLoggedIn = async () => {
    let token = localStorage.getItem('auth-token');
    
    if (token === null) {
      localStorage.setItem('auth-token', '');
      token = '';
    }
  
    try {
      const tokenResponse = await axios.post('http://localhost:6285/user/tokenIsValid', null, {
        headers: {
          "x-auth-token": token
        }
      });
  
      if (tokenResponse.data) {
        const getCurrentUser = await axios.get('http://localhost:6285/user', {
          headers: {
            "x-auth-token": token
          }
        });

        if (getCurrentUser) {
          setUserData({
            token,
            user: getCurrentUser.data
          });
        }
      }
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
  
  checkLoggedIn();
}, []);
  
return (
  <BrowserRouter>
    <UserContext.Provider value={{ userData, setUserData }}>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </UserContext.Provider>
  </BrowserRouter>
)
}
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'Step 3',
    code: `
// Step 3: use context value in components:
import UseContext from '../context/UserContext';
 
const { userData: { user } } = useContext(UseContext);
 
// complete example:
 
export default function Home() {
  const [preLoader, setPreLoader] = useState(false);
  const { userData: { user } } = useContext(UseContext);
  const history = useHistory();
  
  useEffect(() => {
    setPreLoader(true);
    if (!user) {
      setPreLoader(false);
      history.push('/login');
    }
    setPreLoader(false);
  }, [history, user]);
  
  return preLoader ? (<p>Loading ..</p>) : (
    <div className="page">
      Home
    </div>
  )
}
 
// Find details on codebase: damengrandom/mern-jwt-trial-front-end
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const contextApiPointsExample = [
  'Refers as React API which allows passing props across different levels of components directly.',
  'Able to produce global variables that can be passed across different level of components',
  'Context API contains: Provider (provider state to children) & Consumer (receive state from provider)',
  'For small scale project, context API can be used as redux for state management (Reason: simple/easy to implement, especially not much code involved)',
];
