import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Align, Direction } from '@brix-ui/types/css';

import Flex, { FlexProps } from '../src/flex';

const flexId = 'flex';

const renderWithProps = <P extends Partial<FlexProps>>(props: P = {} as P) => {
  return render(<Flex data-testid={flexId} {...props} />);
};

describe('<Flex />', () => {
  describe('reversable direction', () => {
    describe('when direction is undefined', () => {
      describe('when it is not reversed', () => {
        it('should not be applied onto CSS', () => {
          const { getByTestId } = renderWithProps();

          expect(getByTestId(flexId)).not.toHaveStyleRule('flex-direction');
        });
      });

      describe('when it is reversed', () => {
        it('should fallback to `row` and reverse', () => {
          const { getByTestId } = renderWithProps({
            isReversed: true,
          });

          expect(getByTestId(flexId)).toHaveStyleRule('flex-direction', `${Direction.Row}-reverse`);
        });
      });
    });

    describe('when direction is defined', () => {
      describe('when it is not reversed', () => {
        it('should persist passed direction', () => {
          const { getByTestId } = renderWithProps({
            direction: Direction.Row,
          });

          expect(getByTestId(flexId)).toHaveStyleRule('flex-direction', Direction.Row);
        });
      });

      describe('when it is reversed', () => {
        it('should persist passed direction and reverse', () => {
          const { getByTestId } = renderWithProps({
            direction: Direction.Column,
            isReversed: true,
          });

          expect(getByTestId(flexId)).toHaveStyleRule('flex-direction', `${Direction.Column}-reverse`);
        });
      });
    });
  });

  describe('alignment', () => {
    describe('align', () => {
      it('should apply the same value for both alignable properties', () => {
        const { getByTestId } = renderWithProps({
          align: Align.Center,
        });

        ['justify-content', 'align-items'].forEach((property) => {
          expect(getByTestId(flexId)).toHaveStyleRule(property, Align.Center);
        });
      });

      it('should be prioritized before axes', () => {
        const { getByTestId } = renderWithProps({
          align: Align.Center,
          horizontalAlign: Align.Start,
          verticalAlign: Align.End,
        });

        ['justify-content', 'align-items'].forEach((property) => {
          expect(getByTestId(flexId)).toHaveStyleRule(property, Align.Center);
        });
      });
    });

    describe('axes alignment', () => {
      describe(`when direction is \`${Direction.Column}\``, () => {
        describe('verticalAlign', () => {
          it('should be applied to justify-content', () => {
            const { getByTestId } = renderWithProps({
              direction: Direction.Column,
              verticalAlign: Align.Center,
            });

            expect(getByTestId(flexId)).toHaveStyleRule('justify-content', Align.Center);
          });
        });

        describe('horizontalAlign', () => {
          it('should be applied to align-items', () => {
            const { getByTestId } = renderWithProps({
              direction: Direction.Column,
              horizontalAlign: Align.Center,
            });

            expect(getByTestId(flexId)).toHaveStyleRule('align-items', Align.Center);
          });
        });
      });

      describe(`when direction is \`${Direction.Row}\``, () => {
        describe('verticalAlign', () => {
          it('should be applied to align-items', () => {
            const { getByTestId } = renderWithProps({
              verticalAlign: Align.Center,
            });

            expect(getByTestId(flexId)).toHaveStyleRule('align-items', Align.Center);
          });
        });

        describe('horizontalAlign', () => {
          it('should be applied to justify-content', () => {
            const { getByTestId } = renderWithProps({
              horizontalAlign: Align.Center,
            });

            expect(getByTestId(flexId)).toHaveStyleRule('justify-content', Align.Center);
          });
        });
      });

      describe('parsing', () => {
        describe('empty values', () => {
          it('should not be applied to CSS', () => {
            const { getByTestId } = renderWithProps({
              horizontalAlign: undefined,
              verticalAlign: undefined,
            });

            ['justify-content', 'align-items'].forEach((property) => {
              expect(getByTestId(flexId)).not.toHaveStyleRule(property);
            });
          });
        });

        describe(`\`${Align.Start}\` and \`${Align.End}\``, () => {
          it(`should be appended with flex- prefix`, () => {
            const { getByTestId } = renderWithProps({
              horizontalAlign: Align.Start,
              verticalAlign: Align.End,
            });

            expect(getByTestId(flexId)).toHaveStyleRule('justify-content', `flex-${Align.Start}`);
            expect(getByTestId(flexId)).toHaveStyleRule('align-items', `flex-${Align.End}`);
          });
        });

        describe('incorrect align-items values', () => {
          it('should not set align-items and log warning to console', () => {
            jest.spyOn(console, 'warn').mockImplementation(() => {});

            const { getByTestId } = renderWithProps({
              verticalAlign: Align.SpaceBetween,
            });

            expect(console.warn).toHaveBeenCalled();
            expect(getByTestId(flexId)).not.toHaveStyleRule('align-items');
          });
        });
      });
    });
  });
});
