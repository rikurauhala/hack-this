import { colorFooterLink } from '../../theme';

interface FooterLinkProps {
  text: string;
  to: string;
}

/**
 * Renders a link element used in the footer section.
 *
 * @param {string} props.text - The text to display within the link.
 * @param {string} props.to - The URL to link to.
 * @returns {JSX.Element} The rendered FooterLink component.
 */
const FooterLink = ({ text, to }: FooterLinkProps) => {
  const style = `
    ${colorFooterLink}
  `;

  return (
    <a className={style} href={to} rel="noreferrer" target="_blank">
      {text}
    </a>
  );
};

export default FooterLink;
