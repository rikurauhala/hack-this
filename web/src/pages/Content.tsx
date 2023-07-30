import { Route, Routes } from 'react-router-dom';
import GuestBook from './GuestBook';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import NotFound from './NotFound';
import Register from './Register';

const Content = (): JSX.Element => {
  const style = `
    container
    max-w-screen-md
    mx-auto
    px-6
  `;

  return (
    <div className={style}>
      <Routes>
        <Route element={<GuestBook />} path="/guestbook" />
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<Register />} path="/register" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </div>
  );
};

export default Content;
