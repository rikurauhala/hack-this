import { useEffect } from 'react';
import Title from '../components/common/Title';
import Paragraph from '../components/common/Paragraph';

const NotFound = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Not found | Hack This';
  }, []);

  return (
    <div className="container py-4">
      <Title text="Not found" />
      <Paragraph text="There seems to be nothing here." />
    </div>
  );
};

export default NotFound;
