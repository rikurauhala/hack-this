import { ReactNode } from 'react';
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  BookOpenIcon,
  HomeIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';

interface NavigationBarIconProps {
  page: ReactNode;
}

/**
 * Renders an icon element based on the specified page, used in the navigation bar.
 *
 * @param {ReactNode} props.page - The identifier for the specific page or action associated with the icon.
 * @returns {JSX.Element} The rendered NavigationBarIcon component.
 */
const NavigationBarIcon = ({ page }: NavigationBarIconProps): JSX.Element => {
  const style = `
    h-5
    w-5
  `;

  switch (page) {
    case 'guestbook':
      return <BookOpenIcon className={style} />;
    case 'home':
      return <HomeIcon className={style} />;
    case 'login':
      return <ArrowLeftOnRectangleIcon className={style} />;
    case 'logout':
      return <ArrowRightOnRectangleIcon className={style} />;
    case 'register':
      return <UserPlusIcon className={style} />;
    default:
      return <></>;
  }
};

export default NavigationBarIcon;
