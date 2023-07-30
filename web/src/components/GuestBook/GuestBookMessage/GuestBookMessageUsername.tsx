const colors: string[] = [
  'text-orange-400',
  'text-red-400',
  'text-amber-400',
  'text-yellow-400',
  'text-lime-400',
  'text-green-400',
  'text-emerald-400',
  'text-teal-400',
  'text-cyan-400',
  'text-sky-400',
  'text-blue-400',
  'text-indigo-400',
  'text-violet-400',
  'text-purple-400',
  'text-fuchsia-400',
  'text-pink-400',
  'text-rose-400',
];

const getColor = (userId: number): string => {
  return colors[userId % colors.length];
};

interface GuestBookMessageUsernameProps {
  username: string;
  userId: number;
}

const GuestBookMessageUsername = ({ username, userId }: GuestBookMessageUsernameProps): JSX.Element => (
  <strong className={getColor(userId)}>{username}</strong>
);

export default GuestBookMessageUsername;
