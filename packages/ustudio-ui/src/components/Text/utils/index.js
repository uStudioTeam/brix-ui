const renderElement = ({ variant, appearance }) => {
  if (appearance === 'bold') {
    return 'strong';
  }
  
  if (appearance === 'italic') {
    return 'em';
  }
  
  switch (variant) {
    case 'code':
    case 'small':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant;
    case 'caption':
      return 'small';
    case 'article':
    case 'body':
      return 'p';
    case 'span':
    default:
      return 'span';
  }
};

export const textUtils = { renderElement };
