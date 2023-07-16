import NavigationBarDivider from './NavigationBarDivider';
import NavigationBarLink from './NavigationBarLink';

const NavigationBar = (): JSX.Element => (
  <>
    <NavigationBarDivider character=">" />
    <NavigationBarLink text="Home" to="/" />
    <NavigationBarDivider character="|" />
    <NavigationBarLink text="Log in" to="/login" />
    <NavigationBarDivider character="|" />
    <NavigationBarLink text="Register" to="/register" />
  </>
);

export default NavigationBar;
