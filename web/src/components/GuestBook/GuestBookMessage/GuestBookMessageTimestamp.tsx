interface GuestBookMessageTimestampProps {
  timestamp: string;
}

const formatTimestamp = (timestamp: string): string => (
  new Date(timestamp).toISOString().slice(0, 10)
);

const GuestBookMessageTimestamp = ({ timestamp }: GuestBookMessageTimestampProps): JSX.Element => {
  const formattedTimestamp = formatTimestamp(timestamp);

  const style = `
    hidden
    sm:inline
    text-gray-400
  `;

  return (
    <span className={style}>
      [{formattedTimestamp}]
    </span>
  );
};

export default GuestBookMessageTimestamp;
