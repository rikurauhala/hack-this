import { colorText } from '../../theme';
import FooterDivider from './FooterDivider';
import FooterLink from './FooterLink';

/**
 * Renders a footer component with links and a divider, used for displaying various information about the site.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = (): JSX.Element => {
  const style = `
    ${colorText}
    bg-gray-900
    py-4
    text-center
  `;

  return (
    <div className={style}>
      <FooterLink
        text="Source code"
        to="https://github.com/rikurauhala/hack-this"
      />
      <FooterDivider />
      <FooterLink
        text="License"
        to="https://github.com/rikurauhala/hack-this/blob/main/LICENSE"
      />
      <FooterDivider />
      <FooterLink
        text="Author"
        to="https://github.com/rikurauhala"
      />
    </div>
  );
};

export default Footer;
