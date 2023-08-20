import { useEffect } from 'react';
import Title from '../components/common/Title';
import Paragraph from '../components/common/Paragraph';

const Home = (): JSX.Element => {
  useEffect(() => void (document.title = 'Home | Hack This'), []);

  return (
    <div className="container py-4">
      <Title text="Home" />
      <Paragraph text={'Welcome to the Hack This web application security demo.'} />
    </div>
  );
};

export default Home;
