import { colorButtonFocus, colorButtonHover, colorMainBg, colorText } from '../../theme';

interface FormButtonProps {
  text: string;
}

const FormButton = ({ text }: FormButtonProps): JSX.Element => {
  const style = `
    ${colorButtonFocus}
    ${colorButtonHover}
    ${colorMainBg}
    ${colorText}
    focus:outline-none
    focus:ring-2
    mb-3
    mt-3
    py-2
    rounded-md
    w-full
  `;

  return (
    <button className={style} type="submit">
      {text}
    </button>
  );
};

export default FormButton;
