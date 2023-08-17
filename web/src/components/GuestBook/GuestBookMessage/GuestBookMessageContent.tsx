interface GuestBookMessageContentProps {
  message: string;
}

/**
 * Renders the content of a guestbook message.
 *
 * @param {object} props - The props object containing component properties.
 * @param {string} props.message - The message content.
 * @returns {JSX.Element} The rendered GuestBookMessageContent component.
 */
const GuestBookMessageContent = ({ message }: GuestBookMessageContentProps): JSX.Element => (
  <span dangerouslySetInnerHTML={{ __html: message }} />
);

export default GuestBookMessageContent;
