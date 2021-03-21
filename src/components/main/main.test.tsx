import { render, screen } from '@testing-library/react';

import Main from './main';

describe('Main', () => {
  it('should render Main correctly', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /my trips/i }),
    ).toBeInTheDocument();
  });
});
