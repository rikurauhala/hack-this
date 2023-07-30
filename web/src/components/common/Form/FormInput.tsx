import { colorButtonFocus, colorText } from '../../../theme';

interface FormInputProps {
  id: string;
  labelText: string;
  onChange: (value: string) => void;
  type: string;
  value: string;
}

const FormInput = ({ id, labelText, onChange, type, value }: FormInputProps): JSX.Element => {
  const styleLabel = `
    ${colorText}
    block
    font-medium
    text-sm
  `;

  const styleInput = `
    ${colorButtonFocus}
    ${colorText}
    bg-slate-700
    border
    border-slate-700
    focus:outline-none
    focus:ring-1
    mt-1
    p-2
    rounded-md
    w-full
  `;

  return (
    <div className="mb-4">
      <label className={styleLabel} htmlFor={id}>
        {labelText}
      </label>
      <input
        className={styleInput}
        id={id}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        value={value}
      />
    </div>
  );
};

export default FormInput;
