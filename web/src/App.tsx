import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = (): JSX.Element => {
  const styleMain = {
    display: 'flex',
    justifyContent: 'center',
  };

  const styleContainer = {
    backgroundColor: '#1f3957',
    borderRadius: '8px',
    maxWidth: '900px',
    padding: '20px',
    width: '90%',
  };

  return (
    <BrowserRouter>
      <div id="main" style={styleMain}>
        <div id="container" style={styleContainer}>
          <NavigationBar />
          <hr style={{ color: '#3F72AF' }} />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
