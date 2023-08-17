import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colorNavigationBar } from '../../theme';

interface NavigationBarLinkProps {
  to: string;
  text: string;
  icon: ReactNode;
}

/**
 * Renders a link element used in the navigation bar with customizable text, icon, and behavior.
 *
 * @param {string} props.to - The URL to link to.
 * @param {string} props.text - The text to display within the link.
 * @param {ReactNode} props.icon - The icon to display within the link.
 * @returns {JSX.Element} The rendered NavigationBarLink component.
 */
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
        <span className={`${styleLinkText} hidden sm:flex`}>{text}</span>
      </div>
    );
  }

  return (
    <Link className={styleLink} to={to}>
      {icon}
      <span className={`${styleLinkText} hidden sm:flex`}>{text}</span>
    </Link>
  );
};

export default NavigationBarLink;
