import { css, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonProps } from '@ustudio-ui/core/button';
import { WithTheme } from '@ustudio-ui/theme/theme';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
import { ColorSpace, Color } from '@ustudio-ui/types/palette';
import { Values } from '@ustudio-ui/utils/types';

type Intent = NonNullable<ButtonProps['intent']>;

type IntentMixin = (intent: Intent) => FlattenSimpleInterpolation;

const applyIntentStyle = <S>(intent: Intent, baseStyles: S, intentStyles: S): S => {
  if (intent === 'base') {
    return baseStyles;
  }

  return intentStyles;
};

const applyShadow = (color: string, alpha: number) => ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  return css`0 2px 8px
      ${ColorTransformer.toHsla(
        ColorTransformer.toTuple(theme.palette[color as Values<typeof Color>], ColorSpace.HSL) as [
          number,
          number,
          number
        ],
        alpha
      )};
  `;
};

export const disabledButtonMixin = {
  contained: css`
    background-color: var(--c-faint-w-u);

    color: var(--c-faint-s);
  `,
  outlined: css`
    border: 1px solid var(--c-faint-w-u);

    color: var(--c-faint-s);
  `,
  text: css`
    color: var(--c-faint-s);
  `,
  faint: css`
    background-color: var(--c-faint-w);

    color: var(--c-faint-s);
  `,
};

const containedButtonMixin: IntentMixin = (intent) => {
  return css`
    color: var(--c-base-w);

    &,
    &:active:focus,
    &:hover:focus {
      background-color: ${`var(--c-${intent}-s)`};
    }

    &:hover {
      box-shadow: ${applyShadow(`${intent}-s`, 0.4)};
    }

    &:focus {
      background-color: ${`var(--c-${intent}-s-d)`};
    }

    &:active {
      box-shadow: ${applyShadow(`${intent}-s`, 0.25)};
    }
  ` as FlattenSimpleInterpolation;
};

const outlinedButtonMixin: IntentMixin = (intent) => {
  return css`
    background-color: var(--c-base-w);

    &,
    &:active:focus,
    &:hover:focus {
      border: 1px solid ${`var(--c-${intent}-s)`};
      color: ${`var(--c-${intent}-s)`};
    }

    &:hover {
      box-shadow: ${applyShadow(`${intent}-s`, 0.25)};
    }

    &:focus {
      border: 1px solid ${applyIntentStyle(intent, 'var(--c-faint-s)', `var(--c-${intent}-w-u)`)};

      color: ${`var(--c-${intent}-s-d)`};
    }

    &:active {
      box-shadow: ${applyShadow(`${intent}-s`, 0.15)};
    }
  ` as FlattenSimpleInterpolation;
};

const faintButtonMixin: IntentMixin = (intent) => {
  return css`
    color: ${`var(--c-${intent}-s)`};

    &,
    &:active:focus,
    &:hover:focus {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};
    }

    &:hover {
      box-shadow: ${applyShadow(`${intent}-s`, Number(applyIntentStyle(intent, 0.1, 0.125)))};
    }

    &:focus {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-s-d)`, `var(--c-${intent}-w)`)};
    }

    &:active {
      box-shadow: ${applyShadow(`${intent}-s`, 0.075)};

      transform: scale(0.99);
    }
  ` as FlattenSimpleInterpolation;
};

const textButtonMixin: IntentMixin = (intent) => {
  return css`
    color: ${`var(--c-${intent}-s)`};

    &,
    &:active:focus,
    &:hover:focus {
      color: ${`var(--c-${intent}-s)`};
    }

    &:hover {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};
    }

    &:focus {
      text-shadow: ${applyShadow(`${intent}-s`, 0.5)};

      color: ${`var(--c-${intent}-s-d)`};
    }

    &:active {
      background-color: ${applyIntentStyle(intent, 'var(--c-faint-w)', `var(--c-${intent}-w-d)`)};

      text-shadow: ${applyShadow(`${intent}-s`, 0.25)};

      transform: scale(0.99);
    }
  ` as FlattenSimpleInterpolation;
};

const mapIntentStyles = (
  mixin: (intent: Intent) => FlattenSimpleInterpolation
): Record<Intent, FlattenSimpleInterpolation> => {
  return (['base', 'accent', 'critical', 'success'] as Intent[]).reduce((accumulator, key) => {
    return Object.assign(accumulator, { [key]: mixin(key) });
  }, {} as Record<Intent, FlattenSimpleInterpolation>);
};

export const buttonMixin: Record<
  Exclude<ButtonProps['appearance'], undefined>,
  Record<Intent, FlattenSimpleInterpolation>
> = {
  contained: mapIntentStyles(containedButtonMixin),
  outlined: mapIntentStyles(outlinedButtonMixin),
  faint: mapIntentStyles(faintButtonMixin),
  text: mapIntentStyles(textButtonMixin),
};
