/* eslint-disable max-len */
import { FormEvent, ReactNode } from 'react';

interface FormProps {
  buttonText: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  icon: ReactNode;
  password: string;
  setPassword: (newPassword: string) => void;
  setUsername: (newUsername: string) => void;
  username: string;
}

const Form = (props: FormProps): JSX.Element => {
  const { buttonText, handleSubmit, icon, password, setPassword, setUsername, username } = props;

  return (
    <form className="w-96 mx-auto mt-8 p-4 bg-slate-900 rounded-lg shadow-md" onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-4 flex justify-center">
        {icon}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-neutral-50" htmlFor="username">Username</label>
        <input
          className="mt-1 p-2 text-neutral-100 bg-slate-800 border border-slate-700 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          value={username}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-neutral-50" htmlFor="password">Password</label>
        <input
          className="mt-1 p-2 text-neutral-100 bg-slate-800 border border-slate-700 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          value={password}
        />
      </div>
      <button className="mb-3 mt-3 bg-blue-600 text-neutral-100 w-full py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
