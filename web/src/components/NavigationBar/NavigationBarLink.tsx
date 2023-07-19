import { Link, useLocation } from 'react-router-dom';

interface NavigationBarLinkProps {
  to: string;
  text: string;
}

const NavigationBarLink = ({ to, text }: NavigationBarLinkProps): JSX.Element => {
  const currentPage = useLocation().pathname;

  if (currentPage === to) {
    return (
      <span className="text-white font-semibold">
        {text}
      </span>
    );
  }

  return (
    <Link className="text-white hover:text-gray-300" to={to}>
      {text}
    </Link>
  );
};

export default NavigationBarLink;
