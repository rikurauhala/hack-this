import { colorText } from '../../theme';

interface ParagraphProps {
  text: string;
}

/**
 * Renders a paragraph element with customizable text.
 *
 * @param {string} props.text - The text to display within the paragraph.
 * @returns {JSX.Element} The rendered Paragraph component.
 */
const Paragraph = ({ text }: ParagraphProps): JSX.Element => {
  const style = `
    mb-4
    ${colorText}
  `;

  return (
    <p className={style}>
      {text}
    </p>
  );
};

export default Paragraph;
