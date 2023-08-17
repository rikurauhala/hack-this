import { colorText } from '../../theme';

interface TitleProps {
  text: string;
}

/**
 * Renders a title element with customizable text.
 *
 * @param {string} props.text - The text to display within the title.
 * @returns {JSX.Element} The rendered Title component.
 */
const Title = ({ text }: TitleProps): JSX.Element => {
  const style = `
    ${colorText}
    font-bold
    mb-4
    text-3xl
  `;

  return (
    <h1 className={style}>
      {text}
    </h1>
  );
};

export default Title;
