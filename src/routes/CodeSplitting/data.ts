export const codeSplittingExample = [
  {
    title: 'Code splitting for routing',
    code: `
<Suspense fallback={<div>Loading ..</div>}>
  <Router>
    <Navbar />
      <Switch>
        <Route path="/game" component={Game}></Route>
        <Route path="/highScores" component={HighScores}></Route>
        <Route path="/gameOver" component={GameOver}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
  </Router>
</Suspense>
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];

export const codeSplittingSecondExample = [
  {
    title: 'Before',
    code: `
import { add } from './math'; console.log(add(16, 26));
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
  {
    title: 'After',
    code: `
import("./math").then(math => { console.log(math.add(16, 26)); });
    `,
    headingCss: 'cursor: pointer;',
    contentCss: '',
  },
];
