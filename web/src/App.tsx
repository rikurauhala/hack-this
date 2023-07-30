import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StatusMessage from './components/common/StatusMessage';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Content from './pages/Content';
import store from './store';
import { gradientBackground } from './theme';

const App = (): JSX.Element => {
  const styleContent = `
    ${gradientBackground}
    flex-grow
  `;

  const styleWrapper = `
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
