import PageTitle from '../components/common/PageTitle';

const Home = (): JSX.Element => (
  <div className="container py-4">
    <PageTitle text="Home" />
    <p className="mb-4 text-neutral-100">
      Welcome to the <b className="text-blue-600">Hack This</b> web application security demo.
    </p>
    <p className="mb-6 text-neutral-100">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus facilisis odio, nec blandit mauris finibus
      eu. Maecenas pharetra, felis ac venenatis hendrerit, nisi nunc eleifend tortor, a vehicula elit turpis vitae eros.
      Nullam laoreet nisi et erat facilisis, a venenatis urna auctor. Sed auctor justo sit amet mauris fermentum, nec
      congue est scelerisque. Duis eu ex metus. Integer facilisis urna vel tempor iaculis. Ut vitae odio vel elit
      fermentum porttitor in eget nulla. Nam commodo velit vel ultrices luctus. Suspendisse potenti. Nulla facilisi.
    </p>
    <p className="text-neutral-100">
      Pellentesque rhoncus fermentum mauris, vel elementum lectus tristique in. Aliquam erat volutpat. Nullam id
      sagittis libero. Nullam dignissim dui in pharetra ullamcorper. Duis efficitur eget ex at scelerisque. Vestibulum
      aliquam massa et diam interdum, ut volutpat neque maximus. Pellentesque at arcu sed metus auctor consectetur vel
      nec velit. Nulla id dolor ac felis sodales tempus. Suspendisse potenti. Nam eget massa quis orci gravida congue.
      Nam id purus vel lectus sagittis facilisis id sit amet lorem.
    </p>
  </div>
);

export default Home;
