import { MouseEventHandler } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

interface GuestBookMessageDeleteButtonProps {
  messageId: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
}

const GuestBookMessageDeleteButton = ({ messageId, onClick }: GuestBookMessageDeleteButtonProps): JSX.Element => (
  <span className="cursor-pointer" id={messageId} onClick={onClick}>
    <TrashIcon className="w-4 h-4 text-red-600" />
  </span>
);

export default GuestBookMessageDeleteButton;
