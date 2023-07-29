import FooterDivider from './FooterDivider';
import FooterLink from './FooterLink';

const Footer = (): JSX.Element => {
  const style = `
    bg-gray-900
    py-4
    text-center
    text-neutral-200
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
