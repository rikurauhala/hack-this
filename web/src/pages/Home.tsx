import Title from '../components/common/Title';
import Paragraph from '../components/common/Paragraph';

const Home = (): JSX.Element => (
  <div className="container py-4">
    <Title text="Home" />
    <Paragraph text={'Welcome to the Hack This web application security demo.'} />
    <Paragraph
      text={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus facilisis odio, nec blandit mauris finibus
        eu. Maecenas pharetra, felis ac venenatis hendrerit, nisi nunc eleifend tortor, a vehicula elit turpis vitae
        eros. Nullam laoreet nisi et erat facilisis, a venenatis urna auctor. Sed auctor justo sit amet mauris
        fermentum, nec congue est scelerisque. Duis eu ex metus. Integer facilisis urna vel tempor iaculis. Ut vitae
        odio vel elit fermentum porttitor in eget nulla. Nam commodo velit vel ultrices luctus. Suspendisse potenti.
        Nulla facilisi.
      `}
    />
    <Paragraph
      text={`
        Pellentesque rhoncus fermentum mauris, vel elementum lectus tristique in. Aliquam erat volutpat. Nullam id
        sagittis libero. Nullam dignissim dui in pharetra ullamcorper. Duis efficitur eget ex at scelerisque. Vestibulum
        aliquam massa et diam interdum, ut volutpat neque maximus. Pellentesque at arcu sed metus auctor consectetur vel
        nec velit. Nulla id dolor ac felis sodales tempus. Suspendisse potenti. Nam eget massa quis orci gravida congue.
        Nam id purus vel lectus sagittis facilisis id sit amet lorem.
      `}
    />
  </div>
);

export default Home;
