import { colorMain } from '../../../theme';

interface GuestBookMessageUsernameProps {
  username: string;
}

const GuestBookMessageUsername = ({ username }: GuestBookMessageUsernameProps): JSX.Element => (
  <strong className={`${colorMain}`}>{username}</strong>
);

export default GuestBookMessageUsername;
