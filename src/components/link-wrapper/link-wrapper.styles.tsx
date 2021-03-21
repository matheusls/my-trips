import styled from 'styled-components';

export const Wrapper = styled.div`
  color: var(--white);
  cursor: pointer;
  position: fixed;
  right: var(--medium);
  top: var(--medium);
  z-index: 1100;

  svg {
    transform: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`;
