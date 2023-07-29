interface FormButtonProps {
  text: string;
}

const FormButton = ({ text }: FormButtonProps): JSX.Element => {
  const style = `
    bg-blue-600
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    hover:bg-blue-500
    mb-3
    mt-3
    py-2
    rounded-md
    text-neutral-100
    w-full
  `;

  return (
    <button className={style} type="submit">
      {text}
    </button>
  );
};

export default FormButton;
