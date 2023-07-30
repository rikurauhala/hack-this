interface GuestBookMessageContentProps {
  message: string;
}

const GuestBookMessageContent = ({ message }: GuestBookMessageContentProps): JSX.Element => (
  <span dangerouslySetInnerHTML={{ __html: message }} />
);

export default GuestBookMessageContent;
