import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/link-wrapper/link-wrapper';

const Map = dynamic(() => import('components/map/map'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  );
};

export default Home;
