import { ReactNode } from 'react';

interface FormIconProps {
  icon: ReactNode;
}

const FormIcon = ({ icon }: FormIconProps): JSX.Element => {
  const style = `
    flex
    mb-4
    justify-center
  `;

  return (
    <div className={style}>
      {icon}
    </div>
  );
};

export default FormIcon;
