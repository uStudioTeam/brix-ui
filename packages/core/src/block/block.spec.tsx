import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { css } from 'styled-components';

import Block from './block.component';
import type { BlockProps } from './block.props';

const blockId = 'block';

const renderWithSingleProp = <P extends keyof BlockProps>(property: P) => (value: BlockProps[P]) => {
  return render(<Block data-testid={blockId} {...{ [property]: value }} />);
};

describe('<Block />', () => {
  describe('margin', () => {
    const renderWithMargin = renderWithSingleProp('margin');

    describe('empty value', () => {
      it('should not apply margin onto CSS', () => {
        const { getAllByTestId } = renderWithMargin('');
        renderWithMargin({});

        expect(getAllByTestId(blockId)).not.toHaveStyleRule('margin');
      });
    });

    describe('by position', () => {
      it('should place positions in the correct order', () => {
        const { getByTestId } = renderWithMargin({
          top: '1px',
          right: '2px',
          bottom: '3px',
          left: '4px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '1px 2px 3px 4px');
      });

      it('should replace undefined values with 0', () => {
        const { getByTestId } = renderWithMargin({
          top: '1px',
          bottom: '2px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '1px 0 2px 0');
      });
    });

    describe('by axis', () => {
      it('should place axes in the correct order', () => {
        const { getByTestId } = renderWithMargin({
          vertical: '1px',
          horizontal: '2px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '1px 2px');
      });

      it('should replace undefined values with 0', () => {
        const { getByTestId } = renderWithMargin({
          horizontal: '1px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '0 1px');
      });
    });

    describe('by mixed horizontal', () => {
      it('should follow the order [top, horizontal, bottom]', () => {
        const { getByTestId } = renderWithMargin({
          top: '1px',
          bottom: '3px',
          horizontal: '2px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '1px 2px 3px');
      });

      it('should replace empty values with 0', () => {
        const { getByTestId } = renderWithMargin({
          top: '1px',
          horizontal: '0',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '1px 0 0');
      });
    });

    describe('by mixed vertical', () => {
      it('should follow the order [vertical, right, vertical, left]', () => {
        const { getByTestId } = renderWithMargin({
          left: '3px',
          right: '2px',
          vertical: '1px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '1px 2px 1px 3px');
      });

      it('should replace empty values with 0', () => {
        const { getByTestId } = renderWithMargin({
          right: '1px',
          vertical: '0',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('margin', '0 1px 0 0');
      });
    });
  });

  describe('padding', () => {
    const renderWithPadding = renderWithSingleProp('padding');

    describe('empty value', () => {
      it('should not apply padding onto CSS', () => {
        const { getAllByTestId } = renderWithPadding('');
        renderWithPadding({});

        expect(getAllByTestId(blockId)).not.toHaveStyleRule('padding');
      });
    });

    describe('by position', () => {
      it('should place positions in the correct order', () => {
        const { getByTestId } = renderWithPadding({
          top: '1px',
          right: '2px',
          bottom: '3px',
          left: '4px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '1px 2px 3px 4px');
      });

      it('should replace undefined values with 0', () => {
        const { getByTestId } = renderWithPadding({
          top: '1px',
          bottom: '2px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '1px 0 2px 0');
      });
    });

    describe('by axis', () => {
      it('should place axes in the correct order', () => {
        const { getByTestId } = renderWithPadding({
          vertical: '1px',
          horizontal: '2px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '1px 2px');
      });

      it('should replace undefined values with 0', () => {
        const { getByTestId } = renderWithPadding({
          horizontal: '1px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '0 1px');
      });
    });

    describe('by mixed horizontal', () => {
      it('should follow the order [top, horizontal, bottom]', () => {
        const { getByTestId } = renderWithPadding({
          top: '1px',
          bottom: '3px',
          horizontal: '2px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '1px 2px 3px');
      });

      it('should replace empty values with 0', () => {
        const { getByTestId } = renderWithPadding({
          top: '1px',
          horizontal: '0',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '1px 0 0');
      });
    });

    describe('by mixed vertical', () => {
      it('should follow the order [vertical, right, vertical, left]', () => {
        const { getByTestId } = renderWithPadding({
          left: '3px',
          right: '2px',
          vertical: '1px',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '1px 2px 1px 3px');
      });

      it('should replace empty values with 0', () => {
        const { getByTestId } = renderWithPadding({
          right: '1px',
          vertical: '0',
        });

        expect(getByTestId(blockId)).toHaveStyleRule('padding', '0 1px 0 0');
      });
    });
  });

  describe('gap', () => {
    const lastChildId = 'without-gap';

    const firstChildOptions = {
      modifier: (css`
        ${`& > *:not(:last-child)`}
      ` as unknown) as string,
    };

    const renderWithGap = (gap: BlockProps['gap']) => {
      return render(
        <Block data-testid={blockId} gap={gap}>
          <div />

          <div data-testid={lastChildId} />
        </Block>
      );
    };

    describe('empty value', () => {
      it('should not apply margin to children', () => {
        const { getByTestId } = renderWithGap('');

        ['margin-right', 'margin-bottom'].forEach((property) => {
          expect(getByTestId(blockId)).not.toHaveStyleRule(property, undefined, firstChildOptions);
        });
      });
    });

    describe('as string', () => {
      it('should apply both right and bottom margin to all children except the last', () => {
        const { getByTestId } = renderWithGap('1rem');

        ['margin-right', 'margin-bottom'].forEach((property) => {
          expect(getByTestId(blockId)).toHaveStyleRule(property, '1rem', firstChildOptions);
          expect(getByTestId(lastChildId)).not.toHaveStyleRule(property);
        });
      });
    });

    describe('as axes object', () => {
      describe('when both are set', () => {
        it('should map horizontal to right and vertical to bottom margins', () => {
          const { getByTestId } = renderWithGap({
            vertical: '1rem',
            horizontal: '2rem',
          });

          [
            ['margin-bottom', '1rem'],
            ['margin-right', '2rem'],
          ].forEach(([property, value]) => {
            expect(getByTestId(blockId)).toHaveStyleRule(property, value, firstChildOptions);
          });
        });
      });

      describe('when both are not set', () => {
        it('should not apply properties onto css', () => {
          const { getByTestId } = renderWithGap({});

          ['margin-bottom', 'margin-right'].forEach((property) => {
            expect(getByTestId(blockId)).not.toHaveStyleRule(property, undefined, firstChildOptions);
          });
        });
      });
    });
  });
});
