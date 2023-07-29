import { colorFooterLink } from '../../theme';

interface FooterLinkProps {
  text: string;
  to: string;
}

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
