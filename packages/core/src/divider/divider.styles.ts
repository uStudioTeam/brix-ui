import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { applyDisplayNames, parseIndent } from '@brix-ui/utils/functions';
import { Align } from '@brix-ui/types/css';

import Flex from '../flex';

import type { DividerProps } from './divider.props';

const isDirectionColumn = (direction: DividerProps['direction']) => {
  return direction?.endsWith('column');
};

const parseIndentByPosition = (value: string, position: number): string => {
  if (value.split(' ').length > 1) {
    return value;
  }

  const indent: string[] = [];
  indent[position] = '0';
  indent[Math.abs(indent.length - 2)] = value;

  return indent.join(' ');
};

const getAlignStyles = ({
  align,
  property,
  value,
}: Pick<DividerProps, 'align'> & {
  property: 'width' | 'height';
  value: string;
}): FlattenSimpleInterpolation => {
  const { smaller, larger } =
    align === Align.Start
      ? {
          smaller: 'before',
          larger: 'after',
        }
      : {
          smaller: 'after',
          larger: 'before',
        };

  if (align === Align.Center) {
    return css`
      &:before,
      &:after {
        ${property}: 100%;
      }
    `;
  }

  return css`
    ${`&:${smaller}`} {
      ${property}: ${value};
    }

    ${`&:${larger}`} {
      ${property}: 100%;
    }
  `;
};

const Divider = styled(Flex).attrs({
  forwardedAs: 'span',
})<
  {
    $color: DividerProps['color'];
    $align: DividerProps['align'];
    $padding: DividerProps['padding'];
    $margin: DividerProps['margin'];
  } & Exclude<DividerProps, 'color' | 'align' | 'padding' | 'margin'>
>(
  ({
    theme,
    thickness = '1px',
    direction,
    isInline,
    redLine = '1rem',
    $color = 'faint-weak-up',
    $align: align = Align.Start,
    $padding: padding,
    $margin: margin,
  }) => {
    const color = theme.colorHelper.parseColor($color);

    return css`
      ${isDirectionColumn(direction) ? 'width' : 'height'}: ${thickness};
      ${isDirectionColumn(direction) ? 'height' : 'width'}: ${isInline ? 'auto' : '100%'};

      margin: ${parseIndentByPosition(parseIndent(margin), Number(!isDirectionColumn(direction)))};

      &,
      &:before,
      &:after {
        background-color: ${color};
      }

      &[data-has-children] {
        ${isDirectionColumn(direction) ? 'width' : 'height'}: auto;

        position: relative;

        align-items: center;

        background-color: unset;

        & > * {
          padding: ${parseIndentByPosition(parseIndent(padding), Number(isDirectionColumn(direction)))};
        }

        &:before,
        &:after {
          content: '';

          ${isDirectionColumn(direction) ? 'width' : 'height'}: ${thickness};
        }

        ${getAlignStyles({
          align,
          property: isDirectionColumn(direction) ? 'height' : 'width',
          value: redLine,
        })};
      }
    `;
  }
);

const Styled = applyDisplayNames({ Divider });

export default Styled;
