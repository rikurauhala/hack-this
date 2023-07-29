interface FooterLinkProps {
  text: string;
  to: string;
}

const FooterLink = ({ text, to }: FooterLinkProps) => (
  <a className="text-blue-200" href={to} rel="noreferrer" target="_blank">
    {text}
  </a>
);

export default FooterLink;
