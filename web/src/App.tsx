import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AppRoutes from './routes';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="flex justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto bg-gray-200">
          <NavigationBar />
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
