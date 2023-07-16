export type RegistrationStatus = 'SUCCESS' | 'FAILURE' | null;

interface RegistrationStatusMessageProps {
  errorMessage: string;
  registrationStatus: RegistrationStatus;
}

const RegistrationStatusMessage = (props: RegistrationStatusMessageProps): JSX.Element => {
  const { errorMessage, registrationStatus } = props;

  if (registrationStatus === 'SUCCESS') {
    return <p style={{ color: '#5FAD56' }}>Registration successful!</p>;
  }

  if (registrationStatus === 'FAILURE') {
    return <p style={{ color: '#FF5733' }}>{errorMessage}</p>;
  }

  return <></>;
};

export default RegistrationStatusMessage;
