import { colorNavigationBar } from '../../theme';

/**
 * Renders a divider element used to separate links in the navigation bar.
 *
 * @returns {JSX.Element} The rendered NavigationBarDivider component.
 */
const NavigationBarDivider = (): JSX.Element => {
  const style = `
    ${colorNavigationBar}
    mx-4
  `;

  return (
    <span className={style}> | </span>
  );
};

export default NavigationBarDivider;
