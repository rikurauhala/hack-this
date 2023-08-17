interface GuestBookMessageTimestampProps {
  timestamp: string;
}

const formatTimestamp = (timestamp: string): string => (
  new Date(timestamp).toISOString().slice(0, 10)
);

/**
 * Renders the timestamp of a guestbook message in a formatted manner.
 *
 * @param {string} props.timestamp - The timestamp to be formatted and displayed.
 * @returns {JSX.Element} The rendered GuestBookMessageTimestamp component.
 */
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
