import './index.css';
import { h, render } from 'preact';
import Routes from './components/Routes';

render(<Routes />, document.getElementById('root') as Element);
