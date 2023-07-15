import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const Register = () => <h1>Register</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">home</Link>
        <Link to="/register">register</Link>
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
