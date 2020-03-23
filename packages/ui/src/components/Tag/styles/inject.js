const background = (background = 'var(--g-primary)') => `background: ${background}`;

const color = (color = 'var(--c-lightest)') => `color: ${color}`;

export const inject = { background, color };
