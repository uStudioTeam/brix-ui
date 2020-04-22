const displayStyle = ({ isInline }) => `display: ${isInline ? 'inline-' : ''}flex`;

const width = ({ isInline }) => `width: ${isInline ? 'auto' : '100%'}`;

const directionStyle = ({ direction, isReversed }) => `flex-direction: ${direction}${isReversed ? '-reverse' : ''}`;

const wrapStyle = ({ isWrap }) => `flex-wrap: ${isWrap ? 'wrap' : 'nowrap'}`;

export const inject = { displayStyle, width, directionStyle, wrapStyle };
