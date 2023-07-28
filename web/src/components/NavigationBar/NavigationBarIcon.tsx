import { ReactNode } from 'react';
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline';

interface NavigationBarIconProps {
  page: ReactNode;
}

const NavigationBarIcon = ({ page }: NavigationBarIconProps): JSX.Element => {
  switch (page) {
    case 'home':
      return <HomeIcon className="h-5 w-5" />;
    case 'login':
      return <ArrowLeftOnRectangleIcon className="h-5 w-5" />;
    case 'logout':
      return <ArrowRightOnRectangleIcon className="h-5 w-5" />;
    case 'register':
      return <UserPlusIcon className="h-5 w-5" />;
    default:
      return <></>;
  }
};

export default NavigationBarIcon;
