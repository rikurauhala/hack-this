import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBarDivider from './NavigationBarDivider';
import NavigationBarLink from './NavigationBarLink';
import NavigationBarIcon from './NavigationBarIcon';

interface User {
  token: string;
  username: string;
}

const NavigationBar = (): JSX.Element => {
  const textHome = 'Home';
  const textLogIn = 'Log in';
  const textLogOut = 'Log out';
  const textRegister = 'Register';

  const [user, setUser] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user');
    if (userJSON) {
      const userJson = JSON.parse(userJSON) as User;
      setUser(userJson.username);
    } else {
      setUser('');
    }
  }, [location.pathname]);

  return (
    <div className="py-4 bg-gradient-to-r from-indigo-600 to-sky-600">
      <div className="container mx-auto max-w-screen-md px-6 flex justify-between items-center">
        <div className="flex items-center">
          <NavigationBarLink icon={<NavigationBarIcon page="home" />} text={textHome} to="/" />
          <NavigationBarDivider />
          {user ? (
            <NavigationBarLink icon={<NavigationBarIcon page="logout" />} text={textLogOut} to="/logout" />
          ) : (
            <>
              <NavigationBarLink icon={<NavigationBarIcon page="login" />} text={textLogIn} to="/login" />
              <NavigationBarDivider />
              <NavigationBarLink icon={<NavigationBarIcon page="register" />} text={textRegister} to="/register" />
            </>
          )}
        </div>
        <div className="text-neutral-50 text-lg font-semibold">
          Hack This
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
