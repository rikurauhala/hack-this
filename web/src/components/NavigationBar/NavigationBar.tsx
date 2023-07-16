import NavigationBarLink from './NavigationBarLink';

const NavigationBar = (): JSX.Element => (
  <>
    <NavigationBarLink text="Home" to="/" />
    <NavigationBarLink text="Log in" to="/login" />
    <NavigationBarLink text="Register" to="/register" />
  </>
);

export default NavigationBar;
