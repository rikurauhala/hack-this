import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AppRoutes from './routes';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="flex justify-center min-h-screen bg-gray-50">
        <div className="w-full bg-gradient-to-b from-gray-200 to-slate-100">
          <NavigationBar />
          <div className="container max-w-screen-md mx-auto px-6">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
