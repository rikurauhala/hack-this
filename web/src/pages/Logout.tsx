import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusMessage from '../components/common/StatusMessage';

const Logout = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      window.localStorage.removeItem('user');
      setTimeout(() => {
        return navigate('/');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h2>Logout</h2>
      <StatusMessage
        message={'Logging out... see you!'}
        status={'SUCCESS'}
      />
    </>
  );
};

export default Logout;
