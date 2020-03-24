const boxShadow = isOpen => `box-shadow: ${isOpen ? 'var(--s-light)' : 'none'};`;

export const inject = { boxShadow };
