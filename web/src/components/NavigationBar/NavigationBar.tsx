import NavigationBarDivider from './NavigationBarDivider';
import NavigationBarLink from './NavigationBarLink';

const formatText = (text: string) => text.toUpperCase();

const NavigationBar = (): JSX.Element => {
  const textHome = formatText('home');
  const textLogIn = formatText('log in');
  const textRegister = formatText('register');

  return (
    <>
      <NavigationBarDivider character=">" />
      <NavigationBarLink text={textHome} to="/" />
      <NavigationBarDivider character="|" />
      <NavigationBarLink text={textLogIn} to="/login" />
      <NavigationBarDivider character="|" />
      <NavigationBarLink text={textRegister} to="/register" />
    </>
  );
};

export default NavigationBar;
