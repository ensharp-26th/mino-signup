import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import FindPassword from './pages/find-password/FindPassword';
import ResetPassword from './pages/reset-password/ResetPassword';
import ResetPasswordSuccess from './pages/reset-password/ResetPasswordSuccess';
import MyInformation from './pages/MyInformation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/find-password" element={<FindPassword />}></Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="/reset-password/success" element={<ResetPasswordSuccess />}></Route>
      <Route path="/my-information" element={<MyInformation />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
