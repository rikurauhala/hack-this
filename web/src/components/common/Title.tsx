interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps): JSX.Element => (
  <h1 className="text-3xl font-bold mb-4 text-neutral-100">
    {text}
  </h1>
);

export default Title;
