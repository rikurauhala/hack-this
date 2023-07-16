import { Link } from 'react-router-dom';

const style = {
  paddingRight: 10,
};

interface NavigationBarLinkProps {
  to: string
  text: string
}

const NavigationBarLink = ({ to, text }: NavigationBarLinkProps): JSX.Element => (
  <Link style={style} to={to}>
    {text}
  </Link>
);

export default NavigationBarLink;
