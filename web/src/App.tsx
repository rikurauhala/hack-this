import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StatusMessage from './components/common/StatusMessage';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Content from './components/Content';
import store from './store';

const App = (): JSX.Element => {
  const styleContent = `
    bg-gradient-to-b
    from-gray-950
    flex-grow
    to-slate-900
  `;

  const styleWrapper = `
    bg-gray-950
    flex
    flex-col
    min-h-screen
  `;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styleWrapper}>
          <div className={styleContent}>
            <NavigationBar />
            <Content />
          </div>
          <Footer />
        </div>
        <StatusMessage />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
