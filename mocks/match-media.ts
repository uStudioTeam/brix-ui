const mock = () => {};

export const matchMedia = (minWidth = 0): void => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => {
      return {
        matches: query === `screen and (min-width: ${minWidth}px)`,
        media: query,
        onchange: null,
        addListener: mock,
        removeListener: mock,
        addEventListener: mock,
        removeEventListener: mock,
        dispatchEvent: mock,
      };
    },
  });
};
