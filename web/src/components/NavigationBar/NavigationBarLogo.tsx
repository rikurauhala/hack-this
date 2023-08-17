import { colorNavigationBar } from '../../theme';

/**
 * Renders the logo for the navigation bar, displaying the application name.
 *
 * @returns {JSX.Element} The rendered NavigationBarLogo component.
 */
const NavigationBarLogo = (): JSX.Element => {
  const style = `
    ${colorNavigationBar}
    text-lg
    font-semibold
  `;

  return (
    <div className={style}>
      Hack This
    </div>
  );
};

export default NavigationBarLogo;
