import { css, keyframes } from 'styled-components';

const _textLikeStyle = fontSize => {
  return css`
    height: ${fontSize / 16}rem;
    margin: calc((${fontSize / 16}rem * 0.375 - 1px) / 2) 0;
  `;
};

const _getTextStyle = (height = 'body') => {
  return {
    code: _textLikeStyle(12),
    small: _textLikeStyle(12),
    span: _textLikeStyle(12),
    body: _textLikeStyle(16),
    article: _textLikeStyle(14),
    caption: css`
      height: 0.75rem;
    `,
    h6: _textLikeStyle(16),
    h5: _textLikeStyle(20),
    h4: _textLikeStyle(22),
    h3: _textLikeStyle(24),
    h2: _textLikeStyle(32),
    h1: _textLikeStyle(46),
  }[height];
};

const _textWidth = appearance => {
  return css`
    width: ${appearance?.width || '100%'};
  `;
};

const _blockSize = appearance => {
  return css`
    width: ${appearance?.width || appearance?.height || '2rem'};
    height: ${appearance?.height || appearance?.width || '2rem'};
  `;
};

const getVariant = ({ variant, appearance }) => {
  return {
    text: css`
      display: inline-block;

      ${_textWidth(appearance)};
      ${_getTextStyle(appearance?.height)};
    `,
    block: css`
      display: block;

      ${_blockSize(appearance)}
    `,
  }[variant];
};

const shimmer = keyframes`
  from {
    background-position: -1200px 0;
  }

  to {
    background-position: 1200px 0;
  }
`;

const borderRadius = appearance => `border-radius: ${appearance?.borderRadius || 'var(--border-radius)'}`;

export const inject = { getVariant, shimmer, borderRadius };
