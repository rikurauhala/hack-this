import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
