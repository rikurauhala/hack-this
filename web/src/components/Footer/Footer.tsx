import FooterDivider from './FooterDivider';
import FooterLink from './FooterLink';

const Footer = () => (
  <div className="bg-gray-900 text-neutral-200 text-center py-4">
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

export default Footer;
