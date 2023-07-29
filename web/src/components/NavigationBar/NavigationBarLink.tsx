import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationBarLinkProps {
  to: string;
  text: string;
  icon: ReactNode;
}

const NavigationBarLink = ({ to, text, icon }: NavigationBarLinkProps): JSX.Element => {
  const currentPage = useLocation().pathname;

  const styleLink = `
    flex
    hover:text-gray-300
    items-center
    text-neutral-50
  `;

  const styleLinkDisabled = `
    flex
    font-semibold
    items-center
    text-neutral-50
  `;

  const styleLinkText = `
    ml-2
  `;

  if (currentPage === to) {
    return (
      <div className={styleLinkDisabled}>
        {icon}
        <span className={styleLinkText}>{text}</span>
      </div>
    );
  }

  return (
    <Link className={styleLink} to={to}>
      {icon}
      <span className={styleLinkText}>{text}</span>
    </Link>
  );
};

export default NavigationBarLink;
