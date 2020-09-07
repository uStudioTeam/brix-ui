import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import 'jest-styled-components';

import ThemeProvider from '@ustudio-ui/theme';
import { matchMedia } from '@ustudio-ui/utils/tests';

import Disclosure, { DisclosureProps } from '../src/disclosure';

const disclosureId = 'disclosure';

const renderWithProps = (props: Partial<DisclosureProps> = {}) => {
  return render(
    <ThemeProvider>
      <Disclosure icon={() => <div />} {...props} data-testid={disclosureId} />
    </ThemeProvider>
  );
};

const click = (element: HTMLElement): void => {
  fireEvent.click(element.querySelector('button') as HTMLButtonElement);
};

describe('<Disclosure />', () => {
  matchMedia();

  describe('open/close state', () => {
    describe('when uncontrolled', () => {
      it('should open/close without external state control', () => {
        const { getByTestId } = renderWithProps();

        click(getByTestId(disclosureId));

        waitFor(() => {
          expect(getByTestId(disclosureId).querySelector('button + div')).toHaveStyleRule('height', 'auto');
        });

        click(getByTestId(disclosureId));

        waitFor(() => {
          expect(getByTestId(disclosureId).querySelector('button + div')).toHaveStyleRule('height', 0);
        });
      });
    });

    describe('when controlled', () => {
      it('should open/close when `isOpen` prop changes', () => {
        const { getByTestId, rerender } = render(
          <ThemeProvider>
            <Disclosure data-testid={disclosureId} icon={() => <div />} />
          </ThemeProvider>
        );

        waitFor(() => {
          expect(getByTestId(disclosureId).querySelector('button + div')).toHaveStyleRule('height', 'auto');
        });

        rerender(
          <ThemeProvider>
            <Disclosure isOpen data-testid={disclosureId} icon={() => <div />} />
          </ThemeProvider>
        );

        waitFor(() => {
          expect(getByTestId(disclosureId).querySelector('button + div')).toHaveStyleRule('height', 0);
        });
      });
    });
  });

  describe('state change callbacks', () => {
    describe('onChange', () => {
      it('should call `onChange` on each open state change', () => {
        const onChange = jest.fn();

        const { getByTestId } = renderWithProps({
          onChange,
        });

        click(getByTestId(disclosureId));

        click(getByTestId(disclosureId));

        waitFor(() => {
          expect(onChange).toHaveBeenCalledTimes(2);
        });
      });
    });

    describe('onOpen', () => {
      it('should call `onOpen` when next open state would be `true`', () => {
        const onOpen = jest.fn();

        const { getByTestId } = renderWithProps({
          onOpen,
        });

        click(getByTestId(disclosureId));

        waitFor(() => {
          expect(onOpen).toHaveBeenCalledTimes(1);
        });

        click(getByTestId(disclosureId));

        waitFor(() => {
          expect(onOpen).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('onClose', () => {
      it('should call `onClose` when next open state would be `false`', () => {
        const onClose = jest.fn();

        const { getByTestId } = renderWithProps({
          onClose,
        });

        click(getByTestId(disclosureId));

        click(getByTestId(disclosureId));

        waitFor(() => {
          expect(onClose).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
