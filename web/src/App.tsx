import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StatusMessage from './components/common/StatusMessage';
import NavigationBar from './components/NavigationBar';
import AppRoutes from './routes';
import store from './store';

const App = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="flex justify-center min-h-screen bg-gray-950">
        <div className="w-full bg-gradient-to-b from-gray-950 to-slate-950">
          <NavigationBar />
          <div className="container max-w-screen-md mx-auto px-6">
            <AppRoutes />
          </div>
        </div>
      </div>
      <StatusMessage />
    </BrowserRouter>
  </Provider>
);

export default App;
