import { colorButtonFocus, colorButtonHover, colorMainBg, colorText } from '../../theme';

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Renders a button element with customizable text and styling.
 *
 * @param {() => void} [props.onClick] - A function to be executed when the button is clicked.
 * @param {string} props.text - The text to display on the button.
 * @param {'button' | 'submit' | 'reset'} [props.type] - The type of the button (default is 'submit').
 * @returns {JSX.Element} The rendered Button component.
 */

const Button = ({ onClick, text, type = 'submit' }: ButtonProps): JSX.Element => {
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
    <button className={style} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
