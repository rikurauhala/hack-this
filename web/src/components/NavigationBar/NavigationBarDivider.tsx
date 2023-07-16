interface NavigationBarDividerProps {
  character: string,
}

const NavigationBarDivider = ({ character }: NavigationBarDividerProps): JSX.Element => (
  <span style={{ color: '#3F72AF', padding: 5 }}> {character} </span>
);

export default NavigationBarDivider;
