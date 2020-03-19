import { css } from 'styled-components';

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

const _textWidth = (width = '100%') => {
  return css`
    width: ${width};
  `;
};

const _blockSize = appearance => {
  return css`
    width: ${appearance?.width || appearance?.height || '2rem'};
    height: ${appearance?.height || appearance?.width || '2rem'};
  `;
};

const getVariant = ({ variant, appearance }) => {
  switch (variant) {
    case 'text':
      return css`
        display: inline-block;

        ${_textWidth(appearance?.width)};
        ${_getTextStyle(appearance?.height)};
      `;
    case 'block':
    default:
      return css`
        display: block;

        ${_blockSize(appearance)}
      `;
  }
};

const borderRadius = (borderRadius = 'var(--border-radius)') =>
  css`
    border-radius: ${borderRadius};
  `;

export const inject = { getVariant, borderRadius };
