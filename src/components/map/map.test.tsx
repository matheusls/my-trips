import { render, screen } from '@testing-library/react';

import Map from './map';

describe('Map', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i }),
    ).toBeInTheDocument();
  });

  it('should render with marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Sorocaba',
        slug: 'sorocaba',
        location: {
          latitude: 0,
          longitude: 0,
        },
      },
      {
        id: '2',
        name: 'Reykjavik',
        slug: 'reykjavik',
        location: {
          latitude: 129,
          longitude: -50,
        },
      },
    ];

    render(<Map places={places} />);

    expect(screen.getByTitle(/sorocaba/i)).toBeInTheDocument();
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument();
  });
});
