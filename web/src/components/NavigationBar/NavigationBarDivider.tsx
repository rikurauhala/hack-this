interface NavigationBarDividerProps {
  character: string;
}

const NavigationBarDivider = ({ character }: NavigationBarDividerProps): JSX.Element => (
  <span className="text-white"> {character} </span>
);

export default NavigationBarDivider;
