import { css, FlattenSimpleInterpolation } from 'styled-components';
import { transparentize } from 'polished';

import { Color } from '@ustudio-ui/types/palette';
import type { Values } from '@ustudio-ui/utils/types';
import { Variable } from '@ustudio-ui/types/css';
import { getCssVariable } from '@ustudio-ui/utils/functions';
import type { WithTheme } from '@ustudio-ui/theme/entity';

import type { ButtonProps } from './button.props';

type Intent = NonNullable<ButtonProps['intent']>;

type IntentMixin = (intent: Intent) => (props: WithTheme) => FlattenSimpleInterpolation;

const applyIntentStyle = <S>(intent: Intent, baseStyles: S, intentStyles: S): S => {
  if (intent === 'base') {
    return baseStyles;
  }

  return intentStyles;
};

const applyShadow = (color: string, alpha: number) => ({ theme }: WithTheme): FlattenSimpleInterpolation => {
  return css`0 2px 8px
      ${transparentize(1 - alpha, theme.palette[color as Values<typeof Color>])};
  `;
};

export const disabledButtonMixin = {
  contained: css`
    background-color: ${getCssVariable(Variable.Color, Color.FaintWeak)};

    color: ${getCssVariable(Variable.Color, Color.FaintStrongDown)};
  `,
  outlined: css`
    border-color: ${getCssVariable(Variable.Color, Color.FaintWeakUp)};

    color: ${getCssVariable(Variable.Color, Color.FaintStrongDown)};
  `,
  faint: css`
    background-color: ${getCssVariable(Variable.Color, Color.FaintWeak)};

    color: ${getCssVariable(Variable.Color, Color.FaintStrongDown)};
  `,
  text: css`
    color: ${getCssVariable(Variable.Color, Color.FaintStrong)};
  `,
};

const containedButtonMixin: IntentMixin = (intent) => () => {
  return css`
    color: ${applyIntentStyle(intent, 'var(--c-base-weak)', 'var(--c-text-base-weak)')};

    &,
    &:active:focus,
    &:hover:focus {
      background-color: ${`var(--c-${intent}-strong)`};
    }

    &:hover {
      box-shadow: ${applyShadow(`${intent}-strong`, 0.4)};
    }

    &:focus {
      background-color: ${`var(--c-${intent}-strong-down)`};
    }

    &:active {
      box-shadow: ${applyShadow(`${intent}-strong`, 0.25)};
    }
  ` as FlattenSimpleInterpolation;
};

const outlinedButtonMixin: IntentMixin = (intent) => () => {
  return css`
    background-color: var(--c-base-weak);

    &,
    &:active:focus,
    &:hover:focus {
      border: 1px solid ${`var(--c-${intent}-strong)`};
      color: ${`var(--c-${intent}-strong)`};
    }

    &:hover {
      box-shadow: ${applyShadow(`${intent}-strong`, 0.25)};
    }

    &:focus {
      border: 1px solid
        ${applyIntentStyle(
          intent,
          `${getCssVariable(Variable.Color, Color.FaintStrong)}`,
          `var(--c-${intent}-weak-up)`
        )};

      color: ${`var(--c-${intent}-strong-down)`};
    }

    &:active {
      box-shadow: ${applyShadow(`${intent}-strong`, 0.15)};
    }
  ` as FlattenSimpleInterpolation;
};

const faintButtonMixin: IntentMixin = (intent) => () => {
  return css`
    color: ${`var(--c-${intent}-strong)`};

    &,
    &:active:focus,
    &:hover:focus {
      background-color: ${applyIntentStyle(
        intent,
        `${getCssVariable(Variable.Color, Color.FaintWeak)}`,
        `var(--c-${intent}-weak-down)`
      )};
    }

    &:hover {
      box-shadow: ${applyShadow(`${intent}-strong`, Number(applyIntentStyle(intent, 0.1, 0.125)))};
    }

    &:focus {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-weak-up)`, `var(--c-${intent}-weak)`)};
    }

    &:active {
      box-shadow: ${applyShadow(`${intent}-strong`, 0.075)};

      transform: scale(0.99);
    }
  ` as FlattenSimpleInterpolation;
};

const textButtonMixin: IntentMixin = (intent) => () => {
  return css`
    color: ${`var(--c-${intent}-strong)`};

    &,
    &:active:focus,
    &:hover:focus {
      color: ${`var(--c-${intent}-strong)`};
    }

    &:hover {
      background-color: ${applyIntentStyle(
        intent,
        `${getCssVariable(Variable.Color, Color.FaintWeak)}`,
        `var(--c-${intent}-weak-down)`
      )};
    }

    &:focus {
      text-shadow: ${applyShadow(`${intent}-strong`, 0.5)};

      color: ${`var(--c-${intent}-strong-down)`};
    }

    &:active {
      background-color: ${applyIntentStyle(
        intent,
        `${getCssVariable(Variable.Color, Color.FaintWeak)}`,
        `var(--c-${intent}-weak-down)`
      )};

      text-shadow: ${applyShadow(`${intent}-strong`, 0.25)};

      transform: scale(0.99);
    }
  ` as FlattenSimpleInterpolation;
};

const mapIntentStyles = (mixin: IntentMixin): Record<Intent, FlattenSimpleInterpolation> => {
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
