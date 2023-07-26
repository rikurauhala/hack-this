import React, { useState } from 'react';
import StatusMessage, { Status } from '../components/common/StatusMessage';
import RegistrationForm from '../components/registration/RegistrationForm';
import { registerUser } from '../services/register';
import PageTitle from '../components/common/PageTitle';

const Register = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [registrationStatus, setRegistrationStatus] = useState<Status>(null);

  const clearStatusMessage = () => {
    const TIMEOUT_MS = 5000;
    setTimeout(() => {
      setMessage('');
      setRegistrationStatus(null);
    }, TIMEOUT_MS);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registerUser(username, password);
      setMessage('Registration successful');
      setRegistrationStatus('SUCCESS');
      clearStatusMessage();
      setUsername('');
      setPassword('');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message);
        setRegistrationStatus('ERROR');
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
    <div className="container py-4">
      <PageTitle text="Register" />
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
      <StatusMessage
        message={message}
        status={registrationStatus}
      />
    </div>
  );
};

export default Register;
