export const matchMedia = (minWidth = 0) => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: any) => {
        const mock = () => {};

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
  });
};
