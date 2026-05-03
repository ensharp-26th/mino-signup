import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import FindPassword from './pages/FindPassword';
import MyInformation from './pages/MyInformation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/find-password" element={<FindPassword />}></Route>
      <Route path="/my-information" element={<MyInformation />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
