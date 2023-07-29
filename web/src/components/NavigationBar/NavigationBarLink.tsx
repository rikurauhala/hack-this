import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colorNavigationBar } from '../../theme';

interface NavigationBarLinkProps {
  to: string;
  text: string;
  icon: ReactNode;
}

const NavigationBarLink = ({ to, text, icon }: NavigationBarLinkProps): JSX.Element => {
  const currentPage = useLocation().pathname;

  const styleLink = `
    ${colorNavigationBar}
    flex
    hover:text-gray-300
    items-center
  `;

  const styleLinkDisabled = `
    ${colorNavigationBar}
    flex
    font-semibold
    items-center
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
