import { colorText } from '../../theme';

interface ParagraphProps {
  text: string;
}

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
