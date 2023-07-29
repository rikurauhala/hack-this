import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Paragraph from '../components/common/Paragraph';
import Title from '../components/common/Title';
import LoginForm from '../components/LoginForm';
import { login } from '../services/login';
import { setStatus } from '../store/actions';

const Login = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = await login(username, password);
      window.localStorage.setItem('user', JSON.stringify(user.data));
      dispatch(setStatus(`Welcome, ${username}!`, 'SUCCESS'));
      setUsername('');
      setPassword('');
      return navigate('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setStatus(error.message, 'ERROR'));
        console.error('Error during login:', error.message);
      } else {
        console.error('Error during login:', String(error));
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
      <Title text="Login" />
      <Paragraph text="Use the form to log in with your username and password."/>
      <LoginForm
        handleSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          void handleSubmit(event);
        }}
        password={password}
        setPassword={handlePasswordChange}
        setUsername={handleUsernameChange}
        username={username}
      />
    </div>
  );
};

export default Login;
