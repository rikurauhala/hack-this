import { Link, useLocation } from 'react-router-dom';

interface NavigationBarLinkProps {
  to: string;
  text: string;
}

const NavigationBarLink = ({ to, text }: NavigationBarLinkProps): JSX.Element => {
  const currentPage = useLocation().pathname;

  if (currentPage === to) {
    return (
      <span>
        <u className="text-white">
          {text}
        </u>
      </span>
    );
  }

  return (
    <Link className="text-white hover:text-gray-400" to={to}>
      {text}
    </Link>
  );
};

export default NavigationBarLink;
