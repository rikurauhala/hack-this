/* eslint-disable max-len */
import { FormEvent } from 'react';

interface FormProps {
  buttonText: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

const Form = (props: FormProps): JSX.Element => {
  const { buttonText, handleSubmit, password, setPassword, setUsername, username } = props;

  return (
    <form className="w-96 mx-auto mt-8 p-4 bg-white rounded-lg shadow-md" onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="username">Username</label>
        <input
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          value={username}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
        <input
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          value={password}
        />
      </div>
      <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
