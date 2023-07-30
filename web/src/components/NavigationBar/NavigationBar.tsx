import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBarDivider from './NavigationBarDivider';
import NavigationBarLink from './NavigationBarLink';
import NavigationBarLogo from './NavigationBarLogo';
import NavigationBarIcon from './NavigationBarIcon';
import { gradientNavigationBar } from '../../theme';
import { User } from '../../types';

const NavigationBar = (): JSX.Element => {
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

  const styleNavigationBar = `
    ${gradientNavigationBar}
    py-4
  `;

  const styleContentContainer = `
    container
    flex
    max-w-screen-md
    mx-auto
    items-center
    justify-between
    px-6
  `;

  const styleLinks = `
    flex
    items-center
  `;

  return (
    <div className={styleNavigationBar}>
      <div className={styleContentContainer}>
        <div className={styleLinks}>
          <NavigationBarLink icon={<NavigationBarIcon page="home" />} text={'Home'} to="/" />
          <NavigationBarDivider />
          {user ? (
            <>
              <NavigationBarLink icon={<NavigationBarIcon page="guestbook" />} text={'Guest book'} to="/guestbook" />
              <NavigationBarDivider />
              <NavigationBarLink icon={<NavigationBarIcon page="logout" />} text={'Log out'} to="/logout" />
            </>
          ) : (
            <>
              <NavigationBarLink icon={<NavigationBarIcon page="login" />} text={'Log in'} to="/login" />
              <NavigationBarDivider />
              <NavigationBarLink icon={<NavigationBarIcon page="register" />} text={'Register'} to="/register" />
            </>
          )}
        </div>
        <NavigationBarLogo />
      </div>
    </div>
  );
};

export default NavigationBar;
