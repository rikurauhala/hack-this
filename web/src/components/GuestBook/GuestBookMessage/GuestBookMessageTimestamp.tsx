interface GuestBookMessageTimestampProps {
  timestamp: string;
}

const formatTimestamp = (timestamp: string): string => (
  new Date(timestamp).toISOString().slice(0, 10)
);

const GuestBookMessageTimestamp = ({ timestamp }: GuestBookMessageTimestampProps): JSX.Element => {
  const formattedTimestamp = formatTimestamp(timestamp);
  return <span className="text-gray-400">[{formattedTimestamp}]</span>;
};

export default GuestBookMessageTimestamp;
