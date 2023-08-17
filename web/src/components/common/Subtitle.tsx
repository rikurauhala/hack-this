import { colorText } from '../../theme';

interface SubtitleProps {
  text: string;
}

/**
 * Renders a subtitle element with customizable text.
 *
 * @param {string} props.text - The text to display within the subtitle.
 * @returns {JSX.Element} The rendered Subtitle component.
 */
const Subtitle = ({ text }: SubtitleProps): JSX.Element => {
  const style = `
    ${colorText}
    font-bold
    mb-4
    text-2xl
  `;

  return (
    <h1 className={style}>
      {text}
    </h1>
  );
};

export default Subtitle;
