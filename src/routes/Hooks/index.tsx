import { h } from 'preact';
import CodeBlockTab from '../../components/CodeBlockTab';
import Layout from '../../components/Layouts';
import PointsList from '../../components/PointsList';
import {
  hooksEighthExample,
  hooksExample,
  hooksFifthExample,
  hooksFourthExample,
  hooksPoints,
  hooksSecondExample,
  hooksSecondPoints,
  hooksSeventhExample,
  hooksSixthExample,
  hooksThirdExample,
  hooksThirdPoints,
} from './data';

export default function Hooks() {
  return (
    <Layout id="hooks">
      <h3 class="page-header">React Hooks</h3>
      <p>
        Above version 16.8.0,React hooks has been introduced. (You cannot use
        hooks function inside a class based component){' '}
        <a
          href="https://reactjs.org/docs/hooks-faq.html#:~:text=You%20can't%20use%20Hooks,implementation%20detail%20of%20that%20component."
          target="_blank"
        >
          Reference
        </a>
      </p>
      <h4 class="page-points-header">Purposes:</h4>
      <PointsList data={hooksPoints} />

      <h4 class="page-points-header">useState</h4>
      <p>
        It is a better way to replace the `this.setState`. Simple word: A
        function is used for state creation and interactions usage in a
        component.
      </p>
      <br />
      <p>Example</p>
      <CodeBlockTab contents={hooksExample} />
      <h4 class="page-points-header">useEffect</h4>
      <p>Can be used like lifecycle functions in class based components.</p>
      <p>
        You tell React that your components needs to do something after rendered
      </p>
      <p>
        The function which handles{' '}
        <a
          class="link"
          href="https://smartcar.com/blog/what-the-react-sagas/"
          target="_blank"
        >
          side effects
        </a>{' '}
        (Definition: anything that affects something outside of the scope of the
        current function that's being executed.)
      </p>
      <br />
      <p>Example</p>
      <CodeBlockTab contents={hooksSecondExample} />
      <h4 class="page-points-header">useReducer</h4>
      <p>
        A hook function which accepts reducer function, which is used for
        complex state handling. It contains 2 parts: state (track/show current
        state value) {'&'} dispatch (trigger state change).
      </p>
      <p>
        Use case: When we try to update more than 1 state at same time, we can
        consider using a reducer pattern trying to handle multiple states
        update.
      </p>
      <br />
      <p>Example</p>
      <CodeBlockTab contents={hooksThirdExample} />
      <h4 class="page-points-header">memo</h4>
      <p>
        A hook function which prevents re-rendering after comparing incoming and
        current props.
      </p>
      <p>Use case</p>
      <PointsList data={hooksSecondPoints} />
      <br />
      <p>Example</p>
      <CodeBlockTab contents={hooksFourthExample} />
      <h4 class="page-points-header">useMemo</h4>
      <p>
        A hook function for preventing unnecessary re-rendering (memorize
        expensive functions).
      </p>
      <p>It returns the value of that callback function</p>
      <p>
        {'useMemo(() => computation(a, b), [a, b])'} is the function which is
        able to memorize the expensive computations inside component{' '}
        <a
          class="link"
          href="https://dmitripavlutin.com/react-usememo-hook/"
          target="_blank"
        >
          Reference
        </a>
      </p>
      <CodeBlockTab contents={hooksFifthExample} />
      <h4 class="page-points-header">useCallback</h4>
      <p>A hook function for preventing the function re-renderings</p>
      <p>Purpose: it is used for performance improvement</p>
      <p>It returns the callback function</p>
      <p>
        Please always ask yourself, after utilizing the useCallback hook, does
        the codebase become more simpler or complexer, is that worth doing it?
      </p>
      <p>
        As a conclusion about using useCallback or useMemo, someone said:
        optimization costs more than not having the optimization !!{' '}
        <a
          class="link"
          href="https://dmitripavlutin.com/dont-overuse-react-usecallback/"
          target="_blank"
        >
          Reference
        </a>
      </p>
      <CodeBlockTab contents={hooksSixthExample} />
      <h4 class="page-points-header">useRef</h4>
      <p>
        A hook function that allows directly create a reference DOM element in
        the functional component.
      </p>
      <p>Use cases:</p>
      <PointsList data={hooksThirdPoints} />
      <p>Example</p>
      <CodeBlockTab contents={hooksSeventhExample} />
      <h4 class="page-points-header">Custom hooks</h4>
      <p>
        Purpose: mainly focus on re-usability, and also makes developer life
        easier ~~
      </p>
      <p>
        There are many custom hooks functions out there. For instance, create a
        custom toggle hook function, eg:{' '}
        <a
          class="link"
          href="https://usehooks.com/useLocalStorage/"
          target="_blank"
        >
          Reference
        </a>
      </p>
      <CodeBlockTab contents={hooksEighthExample} />
    </Layout>
  );
}
