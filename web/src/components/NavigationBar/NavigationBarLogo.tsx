import { colorNavigationBar } from '../../theme';

const NavigationBarLogo = () => {
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
