export const loadDocPage = (cb: () => Promise<{ default: string }>) => {
  return async () => {
    const { default: content } = await cb();
    return { content };
  };
};
