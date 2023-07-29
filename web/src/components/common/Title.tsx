import { colorText } from '../../theme';

interface TitleProps {
  text: string;
}

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
