import { Link } from 'react-router-dom';

interface NavigationBarLinkProps {
  to: string,
  text: string,
}

const NavigationBarLink = ({ to, text }: NavigationBarLinkProps): JSX.Element => (
  <Link to={to}>
    {text}
  </Link>
);

export default NavigationBarLink;
