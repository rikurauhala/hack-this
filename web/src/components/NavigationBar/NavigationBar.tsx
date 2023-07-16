import NavigationBarDivider from './NavigationBarDivider';
import NavigationBarLink from './NavigationBarLink';

const NavigationBar = (): JSX.Element => (
  <>
    <NavigationBarLink text="Home" to="/" />
    <NavigationBarDivider />
    <NavigationBarLink text="Log in" to="/login" />
    <NavigationBarDivider />
    <NavigationBarLink text="Register" to="/register" />
  </>
);

export default NavigationBar;
