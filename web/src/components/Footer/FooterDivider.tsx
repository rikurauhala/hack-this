/**
 * Renders a divider element used to separate links in a footer.
 *
 * @returns {JSX.Element} The rendered FooterDivider component.
 */
const FooterDivider = (): JSX.Element => {
  const style = `
    mx-3
  `;

  return (
    <span className={style}>
      ·
    </span>
  );
};

export default FooterDivider;
