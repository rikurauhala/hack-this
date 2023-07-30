import { colorButtonFocus, colorButtonHover, colorMainBg, colorText } from '../../theme';

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ onClick, text, type }: ButtonProps): JSX.Element => {
  const style = `
    ${type === 'reset' ? 'focus:ring-rose-600' : colorButtonFocus}
    ${type === 'reset' ? 'hover:bg-rose-600' : colorButtonHover}
    ${type === 'reset' ? 'bg-rose-500' : colorMainBg}
    ${colorText}
    focus:outline-none
    focus:ring-2
    font-semibold
    mb-3
    mt-3
    py-2
    rounded-md
    w-full
  `;

  return (
    <button className={style} onClick={onClick} type={type || 'submit'}>
      {text}
    </button>
  );
};

export default Button;
