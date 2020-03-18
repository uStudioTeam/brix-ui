const dimension = (dimension, isEditing) => `${isEditing ? `${dimension}px` : '100%'}`;

const opacity = isEditing => isEditing ? 1 : 0;

export const inject = { dimension, opacity };
