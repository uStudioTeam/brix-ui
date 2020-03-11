import styled, { css, keyframes } from 'styled-components';

function textLikeStyle(fontSize) {
  return css`
    height: ${fontSize / 16}rem;
    margin: calc((${fontSize / 16}rem * 0.375 - 1px) / 2) 0;
  `;
}

function getTextStyle(height) {
  return {
    code: textLikeStyle(12),
    small: textLikeStyle(12),
    span: textLikeStyle(12),
    body: textLikeStyle(16),
    article: textLikeStyle(14),
    caption: css`
      height: 0.75rem;
    `,
    h6: textLikeStyle(16),
    h5: textLikeStyle(20),
    h4: textLikeStyle(22),
    h3: textLikeStyle(24),
    h2: textLikeStyle(32),
    h1: textLikeStyle(46),
  }[height];
}

function getVariant({ variant, appearance }) {
  return {
    text: css`
      display: inline-block;
      width: ${appearance?.width || '100%'};
      ${getTextStyle(appearance?.height || 'body')};
    `,
    block: css`
      display: block;
      width: ${appearance?.width || appearance?.height || '2rem'};
      height: ${appearance?.height || appearance?.width || '2rem'};
    `,
  }[variant];
}

const shimmer = keyframes`
  from {
    background-position: -1200px 0;
  }

  to {
    background-position: 1200px 0;
  }
`;

const Placeholder = styled.div.withConfig({ displayName: 'Placeholder' })(
  ({ variant, appearance }) => css`
    cursor: wait;
    background: linear-gradient(to right, transparent 33%, var(--c-light) 66%, transparent);
    background-size: 1200px 100%;

    animation: ${shimmer} 2s linear infinite;

    border-radius: ${appearance?.borderRadius || 'var(--border-radius)'};

    ${getVariant({ variant, appearance })};
  `
);

export const Styled = { Placeholder };
