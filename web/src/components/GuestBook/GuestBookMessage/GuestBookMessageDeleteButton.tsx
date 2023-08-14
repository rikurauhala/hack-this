import { MouseEventHandler, useEffect, useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { User } from '../../../types';

interface GuestBookMessageDeleteButtonProps {
  messageId: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
}

const GuestBookMessageDeleteButton = ({ messageId, onClick }: GuestBookMessageDeleteButtonProps): JSX.Element => {
  const [admin, setAdmin] = useState<boolean>(false);

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user');
    if (userJSON) {
      const userJson = JSON.parse(userJSON) as User;
      setAdmin(userJson.admin);
    } else {
      setAdmin(false);
    }
  }, []);

  if (!admin) return <></>;

  return (
    <span className="cursor-pointer" id={messageId} onClick={onClick}>
      <TrashIcon className="w-4 h-4 text-red-600" />
    </span>
  );
};

export default GuestBookMessageDeleteButton;
