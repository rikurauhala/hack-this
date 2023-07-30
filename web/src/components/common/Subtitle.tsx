import { colorText } from '../../theme';

interface SubtitleProps {
  text: string;
}

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
