interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps): JSX.Element => {
  const style = `
    font-bold
    mb-4
    text-3xl
    text-neutral-100
  `;

  return (
    <h1 className={style}>
      {text}
    </h1>
  );
};

export default Title;
