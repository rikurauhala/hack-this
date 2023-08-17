import { colorButtonFocus, colorText } from '../../../theme';

interface FormInputProps {
  id: string;
  labelText: string;
  onChange: (value: string) => void;
  type: string;
  value: string;
}

/**
 * Renders an input field within a form with a corresponding label.
 *
 * @param {string} props.id - The ID of the input element and its corresponding label.
 * @param {string} props.labelText - The text to display as the label for the input field.
 * @param {(value: string) => void} props.onChange - A function to handle changes in the input value.
 * @param {string} props.type - The type of the input field (e.g., "text", "password").
 * @param {string} props.value - The current value of the input field.
 * @returns {JSX.Element} The rendered FormInput component.
 */
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
