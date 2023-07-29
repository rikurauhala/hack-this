const NavigationBarDivider = (): JSX.Element => {
  const style = `
    mx-4
    text-neutral-100
  `;

  return (
    <span className={style}> | </span>
  );
};

export default NavigationBarDivider;
