interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps): JSX.Element => {
  const style = `
    mb-4
    text-neutral-100
  `;

  return (
    <p className={style}>
      {text}
    </p>
  );
};

export default Paragraph;
