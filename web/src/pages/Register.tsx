import React, { useState } from 'react';
import { registerUser } from '../services/register';

const Register = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = registerUser(username, password);
      console.log(result);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
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
          </tbody>
        </table>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
