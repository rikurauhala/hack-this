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
        <u>
          {text}
        </u>
      </span>
    );
  }

  return (
    <Link to={to}>
      {text}
    </Link>
  );
};

export default NavigationBarLink;
