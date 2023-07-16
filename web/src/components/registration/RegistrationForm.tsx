import { FormEvent } from 'react';

interface RegistrationFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
  setUsername: (newUsername: string) => void;
  setPassword: (newPassword: string) => void;
  username: string;
}

const RegistrationForm = (props: RegistrationFormProps): JSX.Element => {
  const { handleSubmit, password, setUsername, setPassword, username } = props;

  const style = {
    backgroundColor: '#2b4f78',
    borderRadius: '8px',
    display: 'inline-block',
    margin: 'auto',
    padding: '15px',
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} style={style}>
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
  );
};

export default RegistrationForm;
