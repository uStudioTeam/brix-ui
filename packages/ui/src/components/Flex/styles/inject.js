const displayStyle = ({ isInline }) => `${isInline ? 'inline-' : ''}flex`;

const directionStyle = ({ direction, isReversed }) => `${direction}${isReversed ? '-reverse' : ''}`;

export const inject = { displayStyle, directionStyle };
