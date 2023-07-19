import PageTitle from '../components/common/PageTitle';

const Home = (): JSX.Element => (
  <div className="container mx-auto px-4 py-4">
    <PageTitle text="Home" />
    <p>
      Welcome to the <b>Hack This</b> web application security demo.
    </p>
  </div>
);

export default Home;
