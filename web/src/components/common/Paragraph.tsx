interface ParagraphProps {
  text: string;
}

const Paragraph = ({ text }: ParagraphProps): JSX.Element => (
  <p className="mb-4 text-neutral-100">
    {text}
  </p>
);

export default Paragraph;
