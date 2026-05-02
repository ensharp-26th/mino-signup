import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp';
import FindPassword from './pages/FindPassword';
import MyInformation from './pages/MyInformation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/SignIn" element={<SignIn />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/FindPassword" element={<FindPassword />}></Route>
      <Route path="/MyInformation" element={<MyInformation />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
