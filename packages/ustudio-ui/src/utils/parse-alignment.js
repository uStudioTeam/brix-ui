export function parseAlignment(alignment) {
  switch (alignment) {
    case 'start':
    case 'end': {
      return `flex-${alignment}`;
    }
    default: {
      return alignment;
    }
  }
}
