import { css, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonProps } from '@ustudio-ui/core/button';
import { WithTheme } from '@ustudio-ui/theme/theme';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
import { ColorSpace, Color } from '@ustudio-ui/types/palette';
import { Values } from '@ustudio-ui/utils/types';

const applyIntentStyle = (color: string, baseStyles: string, intentStyles: string): string => {
  if (color === 'base') {
    return baseStyles;
  }

  return intentStyles;
};

const applyShadow = (color: string, alpha: number) => ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  return css`0 2px 8px
      ${ColorTransformer.toHsla(
        ColorTransformer.toTuple(theme.palette[color as Values<typeof Color>], ColorSpace.HSL) as [number, number, number],
        alpha
      )};
  `;
};

export const disabledButtonMixin = {
  contained: css`
    border: 1px solid transparent;

    background-color: var(--c-faint-w-u);

    color: var(--c-faint-s);
  `,
  outlined: css`
    border: 1px solid var(--c-faint-w-u);

    color: var(--c-faint-s);
  `,
  text: css`
    border: 1px solid transparent;

    color: var(--c-faint-s);
  `,
  faint: css`
    border: 1px solid transparent;

    background-color: var(--c-faint-w-u);

    color: var(--c-faint-s);
  `,
};

const containedButton = (intent: NonNullable<ButtonProps['intent']>) =>
  css`
    border: 1px solid transparent;

    background-color: ${`var(--c-${intent}-s)`};

    color: var(--c-base-w);

    &:hover {
      box-shadow: ${applyShadow(`${intent}-s`, 0.4)};
    }

    &:focus {
      background-color: ${`var(--c-${intent}-s-d)`};
    }

    &:active {
      background-color: ${`var(--c-${intent}-s-d)`};
      box-shadow: ${applyShadow(`${intent}-s`, 0.3)};

      color: ${applyIntentStyle(intent, `var(--c-faint-s)`, `var(--c-${intent}-w-u)`)};
    }
  ` as FlattenSimpleInterpolation;

const outlinedButton = (intent: NonNullable<ButtonProps['intent']>) =>
  css`
    border: 1px solid ${`var(--c-${intent}-s)`};
    background-color: var(--c-base-w);

    color: ${`var(--c-${intent}-s)`};

    &:hover {
      box-shadow: ${applyShadow(`${intent}-s`, 0.25)};
    }

    &:focus {
      border: 1px solid ${applyIntentStyle(intent, 'var(--c-faint-s)', `var(--c-${intent}-w-u)`)};

      color: ${`var(--c-${intent}-s-d)`};
    }

    &:active {
      border: 1px solid ${applyIntentStyle(intent, 'var(--c-faint-s)', `var(--c-${intent}-w-u)`)};

      box-shadow: ${applyShadow(`${intent}-s`, 0.15)};

      color: ${`var(--c-${intent}-s-d)`};
    }
  ` as FlattenSimpleInterpolation;

const faintButton = (intent: NonNullable<ButtonProps['intent']>) =>
  css`
    border: 1px solid transparent;

    background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};

    color: ${`var(--c-${intent}-s)`};

    &:hover {
      box-shadow: ${applyShadow(`${intent}-s`, Number(applyIntentStyle(intent, '0.1', '0.15')))};
    }

    &:focus {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-w-u)`, `var(--c-${intent}-w)`)};
    }

    &:active {
      background-color: ${applyIntentStyle(intent, 'var(--c-faint-w-u)', `var(--c-${intent}-w)`)};
      box-shadow: ${applyShadow(`${intent}-s`, Number(applyIntentStyle(intent, '0.075', '0.15')))};

      color: ${`var(--c-${intent}-s-d)`};
    }
  ` as FlattenSimpleInterpolation;

const textButton = (intent: NonNullable<ButtonProps['intent']>) =>
  css`
    border: 1px solid transparent;

    color: ${`var(--c-${intent}-s)`};

    &:hover {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};
    }

    &:focus {
      text-shadow: ${applyShadow(`${intent}-s`, 0.5)};

      color: ${`var(--c-${intent}-s-d)`};
    }

    &:active {
      background-color: ${applyIntentStyle(intent, 'var(--c-faint-w)', `var(--c-${intent}-w-d)`)};

      color: ${`var(--c-${intent}-s-d)`};

      text-shadow: ${applyShadow(`${intent}-s`, 0.5)};
    }
  ` as FlattenSimpleInterpolation;

const applyStyle = (
  mixin: (intent: NonNullable<ButtonProps['intent']>) => FlattenSimpleInterpolation
): Record<Exclude<ButtonProps['intent'], undefined>, FlattenSimpleInterpolation> => {
  return ['base', 'accent', 'critical', 'success'].reduce((accumulator, key) => {
    return Object.assign(accumulator, { [key]: mixin(key as NonNullable<ButtonProps['intent']>) });
  }, {} as Record<Exclude<ButtonProps['intent'], undefined>, FlattenSimpleInterpolation>);
};

export const buttonMixin: Record<
  Exclude<ButtonProps['appearance'], undefined>,
  Record<Exclude<ButtonProps['intent'], undefined>, FlattenSimpleInterpolation>
> = {
  contained: applyStyle(containedButton),
  outlined: applyStyle(outlinedButton),
  faint: applyStyle(faintButton),
  text: applyStyle(textButton),
};
