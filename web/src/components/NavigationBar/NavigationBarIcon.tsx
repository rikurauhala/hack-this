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
  const style = 'h-5 w-5';

  switch (page) {
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
