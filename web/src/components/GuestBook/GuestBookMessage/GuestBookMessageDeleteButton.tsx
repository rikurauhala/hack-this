import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteMessage } from '../../../services/messages';
import { setStatus } from '../../../store/actions';
import { User } from '../../../types';

interface GuestBookMessageDeleteButtonProps {
  messageId: number;
}

const GuestBookMessageDeleteButton = ({ messageId }: GuestBookMessageDeleteButtonProps) => {
  const [admin, setAdmin] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user');
    if (userJSON) {
      const userJson = JSON.parse(userJSON) as User;
      setAdmin(userJson.admin);
    } else {
      setAdmin(false);
    }
  }, []);

  const onClick = async (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault();
    try {
      let token = '';
      const userJSON = window.localStorage.getItem('user');
      if (userJSON) {
        const user = JSON.parse(userJSON) as User;
        token = user.token;
      }
      await deleteMessage(messageId, token);
      dispatch(setStatus('Message deleted', 'SUCCESS'));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setStatus(error.message, 'ERROR'));
        console.error('Error while deleting a message:', error.message);
      } else {
        console.error('Error while deleting a message:', String(error));
      }
    }
  };

  if (!admin) return null;

  return (
    <span
      className="cursor-pointer"
      onClick={(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.preventDefault();
        void onClick(event);
      }}
    >
      <TrashIcon className="w-4 h-4 text-red-600" />
    </span>
  );
};

export default GuestBookMessageDeleteButton;
