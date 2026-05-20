import './App.css';

import { BrowserRouter } from 'react-router-dom';

import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

function App() {
  return (
    <BrowserRouter>
    <PublicRouter />
    <PrivateRouter />
    </BrowserRouter>
  )
}

export default App;
