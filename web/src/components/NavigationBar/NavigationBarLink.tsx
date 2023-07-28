import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationBarLinkProps {
  to: string;
  text: string;
  icon: ReactNode;
}

const NavigationBarLink = ({ to, text, icon }: NavigationBarLinkProps): JSX.Element => {
  const currentPage = useLocation().pathname;

  if (currentPage === to) {
    return (
      <div className="text-neutral-50 font-semibold flex items-center">
        {icon}
        <span className="ml-2">{text}</span>
      </div>
    );
  }

  return (
    <Link className="text-neutral-50 hover:text-gray-300 flex items-center" to={to}>
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  );
};

export default NavigationBarLink;
