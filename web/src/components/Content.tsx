import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Register from '../pages/Register';

const Content = (): JSX.Element => (
  <div className="container max-w-screen-md mx-auto px-6">
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Logout />} path="/logout" />
      <Route element={<Register />} path="/register" />
    </Routes>
  </div>
);

export default Content;
