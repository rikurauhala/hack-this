import { useEffect, useState } from 'react';
import { getPing } from '../services/ping';

const Main = (): JSX.Element => {
  const [response, setResponse] = useState<string | undefined>('');

  useEffect(() => {
    const fetchData = async () => {
      const ping = await getPing();
      setResponse(ping);
    };

    void fetchData();
  }, []);

  return (
    <div>
      <h3>Response from /api/ping:</h3>
      <p>{response}</p>
    </div>
  );
};

export default Main;
