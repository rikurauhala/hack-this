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
    <div className="py-4 flex justify-between items-center bg-gradient-to-r from-indigo-500 to-sky-500">
      <div className="ml-4">
        <NavigationBarLink text={textHome} to="/" />
        <NavigationBarDivider />
        {user
          ? (
            <>
              <NavigationBarLink text={textLogOut} to="/logout" />
              <span className="text-gray-300"> (logged in as <b>{user}</b>)</span>
            </>
          ) : (
            <>
              <NavigationBarLink text={textLogIn} to="/login" />
              <NavigationBarDivider />
              <NavigationBarLink text={textRegister} to="/register" />
            </>
          )}
      </div>
      <div className="mr-4 text-white text-lg font-semibold">
        Hack This
      </div>
    </div>
  );
};

export default NavigationBar;
