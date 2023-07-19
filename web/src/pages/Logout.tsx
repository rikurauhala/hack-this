import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
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
      <PageTitle text="Logout" />
      <StatusMessage
        message={'Logging out... see you!'}
        status={'SUCCESS'}
      />
    </>
  );
};

export default Logout;
