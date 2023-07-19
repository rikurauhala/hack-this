import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBarDivider from './NavigationBarDivider';
import NavigationBarLink from './NavigationBarLink';

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
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white">
          <NavigationBarDivider character=">" />
          <NavigationBarLink text={textHome} to="/" />
          <NavigationBarDivider character="|" />
          {user
            ? (
              <>
                <NavigationBarLink text={textLogOut} to="/logout" />
                <span className="text-gray-300"> (logged in as <b>{user}</b>)</span>
              </>
            ) : (
              <>
                <NavigationBarLink text={textLogIn} to="/login" />
                <NavigationBarDivider character="|" />
                <NavigationBarLink text={textRegister} to="/register" />
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
