export type RegistrationStatus = 'SUCCESS' | 'FAILURE' | null;

interface RegistrationStatusMessageProps {
  registrationStatus: RegistrationStatus
}

const RegistrationStatusMessage = ({ registrationStatus }: RegistrationStatusMessageProps): JSX.Element => {
  if (registrationStatus === 'SUCCESS') {
    return <p style={{ color: '#5FAD56' }}>Registration successful!</p>;
  } else if (registrationStatus === 'FAILURE') {
    return <p style={{ color: '#FF5733' }}>Registration failed. Please try again.</p>;
  } else {
    return <></>;
  }
};

export default RegistrationStatusMessage;
