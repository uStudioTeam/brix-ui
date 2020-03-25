const displayStyle = ({ isInline }) => `display: ${isInline ? 'inline-' : ''}flex`;

const directionStyle = ({ direction, isReversed }) => `flex-direction: ${direction}${isReversed ? '-reverse' : ''}`;

export const inject = { displayStyle, directionStyle };
