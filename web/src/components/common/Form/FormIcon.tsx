import { ReactNode } from 'react';

interface FormIconProps {
  icon: ReactNode;
}

/**
 * A component for displaying an icon within a form.
 *
 * @param {ReactNode} props.icon - The icon to be displayed.
 * @returns {JSX.Element} The rendered FormIcon component.
 */
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
