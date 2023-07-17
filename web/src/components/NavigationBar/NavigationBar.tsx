import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBarDivider from './NavigationBarDivider';
import NavigationBarLink from './NavigationBarLink';

const formatText = (text: string) => text.toUpperCase();

interface User {
  token: string;
  username: string;
}

const NavigationBar = (): JSX.Element => {
  const textHome = formatText('home');
  const textLogIn = formatText('log in');
  const textLogOut = formatText('log out');
  const textRegister = formatText('register');

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
    <>
      <NavigationBarDivider character=">" />
      <NavigationBarLink text={textHome} to="/" />
      <NavigationBarDivider character="|" />
      {user
        ? (
          <>
            <NavigationBarLink text={textLogOut} to="/logout" />
            <span style={{ color: '#a1a1a1' }}> (logged in as <b>{user}</b>)</span>
          </>
        ) : (
          <>
            <NavigationBarLink text={textLogIn} to="/login" />
            <NavigationBarDivider character="|" />
            <NavigationBarLink text={textRegister} to="/register" />
          </>
        )
      }
    </>
  );
};

export default NavigationBar;
