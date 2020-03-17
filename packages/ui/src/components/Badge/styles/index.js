import styled, { css } from 'styled-components';

const Badge = styled.span.withConfig({ displayName: 'Badge' })(
  ({ isDisabled, appearance }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: ${appearance?.color || 'inherit'};
    background: ${appearance?.background || 'inherit'};

    padding: 3px var(--i-medium) var(--i-small);
    border-radius: 1.6875rem;

    ${isDisabled
    ? css`
          color: var(--c-neutral);
          background: var(--c-light);
          cursor: not-allowed;
        `
    : ''}
  `
);

export const Styled = { Badge };
