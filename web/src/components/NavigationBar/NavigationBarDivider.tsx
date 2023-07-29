import { colorNavigationBar } from '../../theme';

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
