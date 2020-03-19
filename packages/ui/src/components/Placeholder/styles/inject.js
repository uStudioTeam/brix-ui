import { css, keyframes } from 'styled-components';

const _textLikeStyle = fontSize => {
  return css`
    height: ${fontSize / 16}rem;
    margin: calc((${fontSize / 16}rem * 0.375 - 1px) / 2) 0;
  `;
};

const _getTextStyle = (height = 'body') => {
  switch (height) {
    case 'code':
    case 'small':
    case 'span':
      return _textLikeStyle(12);
    case 'article':
      return _textLikeStyle(14);
    case 'caption':
      return css`
        height: 0.75rem;
      `;
    case 'h5':
      return _textLikeStyle(20);
    case 'h4':
      return _textLikeStyle(22);
    case 'h3':
      return _textLikeStyle(24);
    case 'h2':
      return _textLikeStyle(32);
    case 'h1':
      return _textLikeStyle(46);
    case 'body':
    case 'h6':
    default:
      return _textLikeStyle(16);
  }
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
