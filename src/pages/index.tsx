import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/map/map'), { ssr: false });

const Home = () => {
  return <Map />;
};

export default Home;
