import React, { useState } from 'react';
import RegistrationForm from '../components/registration/RegistrationForm';
import RegistrationStatusMessage, { RegistrationStatus } from '../components/registration/RegistrationStatusMessage';
import { registerUser } from '../services/register';

const Register = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [registrationStatus, setRegistrationStatus] = useState<RegistrationStatus>(null);

  const clearStatusMessage = () => {
    const TIMEOUT_MS = 5000;
    setTimeout(() => {
      setErrorMessage('');
      setRegistrationStatus(null);
    }, TIMEOUT_MS);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registerUser(username, password);
      setRegistrationStatus('SUCCESS');
      clearStatusMessage();
      setUsername('');
      setPassword('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setRegistrationStatus('FAILURE');
        clearStatusMessage();
        console.error('Error during registration:', error.message);
      } else {
        console.error('Error during registration:', String(error));
      }
    }
  };

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  return (
    <>
      <h2>Register</h2>
      <RegistrationForm
        handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          void handleSubmit(event);
        }}
        password={password}
        setPassword={handlePasswordChange}
        setUsername={handleUsernameChange}
        username={username}
      />
      <RegistrationStatusMessage
        errorMessage={errorMessage}
        registrationStatus={registrationStatus}
      />
    </>
  );
};

export default Register;
