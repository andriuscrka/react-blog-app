import Blog from '../components/Blog';
import MainLayout from '../layouts/Main';

const Home = () => {
  return (
    <>
      <MainLayout>
        <Blog />
      </MainLayout>
    </>
  );
};

export default Home;