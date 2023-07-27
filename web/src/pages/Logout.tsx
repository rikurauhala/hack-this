import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/common/PageTitle';
import { setStatus } from '../store/actions';

const Logout = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      window.localStorage.removeItem('user');
      dispatch(setStatus('See you!', 'SUCCESS'));
      return navigate('/');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="container py-4">
      <PageTitle text="Logout" />
    </div>
  );
};

export default Logout;
