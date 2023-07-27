interface PageTitleProps {
  text: string;
}

const PageTitle = ({ text }: PageTitleProps): JSX.Element => (
  <h1 className="text-3xl font-bold mb-4 text-neutral-100">
    {text}
  </h1>
);

export default PageTitle;
