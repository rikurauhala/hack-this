import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StatusMessage from './components/common/StatusMessage';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import AppRoutes from './routes';
import store from './store';

const App = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-950 wrapper">
        <div className="flex-grow bg-gradient-to-b from-gray-950 to-slate-950 content">
          <NavigationBar />
          <div className="container max-w-screen-md mx-auto px-6">
            <AppRoutes />
          </div>
        </div>
        <Footer />
      </div>
      <StatusMessage />
    </BrowserRouter>
  </Provider>
);

export default App;
