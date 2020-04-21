const background = (background = 'var(--g-primary)') => `background: ${background}`;

const color = (color = 'var(--c-white)') => `color: ${color}`;

export const inject = { background, color };
