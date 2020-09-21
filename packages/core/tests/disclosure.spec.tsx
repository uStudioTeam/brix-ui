import React from 'react';
import { render, fireEvent, waitFor, RenderResult } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@brix-ui/theme';
import { matchMedia } from '@brix-ui/utils/tests';

import Disclosure, { DisclosureProps } from '../src/disclosure';

const disclosureId = 'disclosure';

const renderWithProps = (props: Partial<DisclosureProps> = {}): RenderResult & { disclosure: HTMLElement } => {
  const renderResult = render(
    <ThemeProvider>
      <Disclosure icon={() => <div />} {...props} data-testid={disclosureId} />
    </ThemeProvider>
  );

  const disclosure = renderResult.getByTestId(disclosureId);

  return {
    ...renderResult,
    disclosure,
  };
};

const click = (element: HTMLElement): void => {
  fireEvent.click(element.querySelector('button') as HTMLButtonElement);
};

describe('<Disclosure />', () => {
  matchMedia();

  describe('state change callbacks', () => {
    describe('onChange', () => {
      it('should call `onChange` on each open state change', async () => {
        const onChange = jest.fn();

        const { disclosure } = renderWithProps({
          onChange,
        });

        click(disclosure);

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(1);
        });

        click(disclosure);

        await waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(2);
        });
      });
    });

    describe('onOpen', () => {
      it('should call `onOpen` when next open state would be `true`', async () => {
        const onOpen = jest.fn();

        const { disclosure } = renderWithProps({
          onOpen,
        });

        click(disclosure);

        await waitFor(() => {
          expect(onOpen).toHaveBeenCalledTimes(1);
        });

        click(disclosure);

        await waitFor(() => {
          expect(onOpen).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('onClose', () => {
      it('should call `onClose` when next open state would be `false`', async () => {
        const onClose = jest.fn();

        const { disclosure } = renderWithProps({
          onClose,
        });

        click(disclosure);

        await waitFor(() => {
          expect(onClose).not.toHaveBeenCalled();
        });

        click(disclosure);

        await waitFor(() => {
          expect(onClose).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
