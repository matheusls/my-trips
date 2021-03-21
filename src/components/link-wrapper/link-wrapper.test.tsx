import { render, screen } from '@testing-library/react';

import LinkWrapper from './link-wrapper';

describe('LinkWrapper', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Some text</LinkWrapper>);

    expect(
      screen.getByRole('link', { name: /some text/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /some text/i })).toHaveAttribute(
      'href',
      '/my-link',
    );
  });
});
