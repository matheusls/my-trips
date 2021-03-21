import Link from 'next/link';

import { Wrapper } from './link-wrapper.styles';

type LinkWrapperProps = {
  children: React.ReactNode;
  href: string;
};

const LinkWrapper = ({ children, href }: LinkWrapperProps) => (
  <Wrapper>
    <Link href={href}>{children}</Link>
  </Wrapper>
);

export default LinkWrapper;
