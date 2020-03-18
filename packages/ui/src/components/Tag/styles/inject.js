const background = (background = 'var(--g-primary)') => `background: ${background}`;

const color = (color = 'inherit') => `color: ${color}`;

export const inject = { background, color };
