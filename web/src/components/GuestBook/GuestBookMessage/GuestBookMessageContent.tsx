interface GuestBookMessageContentProps {
  message: string;
}

const GuestBookMessageContent = ({ message }: GuestBookMessageContentProps): JSX.Element => (
  <span>{message}</span>
);

export default GuestBookMessageContent;
