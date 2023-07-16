import React, { useState } from 'react';
import RegistrationStatusMessage, { RegistrationStatus } from '../components/Registration/RegistrationStatusmessage';
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

  return (
    <>
      <h2>Register</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void handleSubmit(event);
        }}
        style={{ backgroundColor: '#2b4f78', width: '305px' }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">Username:</label>
              </td>
              <td>
                <input
                  id="username"
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  value={username}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">Password:</label>
              </td>
              <td>
                <input
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  value={password}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button style={{ width: '100%' }} type="submit">
                  Register
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <RegistrationStatusMessage
        errorMessage={errorMessage}
        registrationStatus={registrationStatus}
      />
    </>
  );
};

export default Register;
