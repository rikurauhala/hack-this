import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="flex justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto bg-gray-200">
          <NavigationBar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Logout />} path="/logout" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
