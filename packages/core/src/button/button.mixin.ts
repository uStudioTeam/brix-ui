import { css, FlattenSimpleInterpolation } from 'styled-components';

import type { WithTheme } from '@brix-ui/theme/entity';
import { shadow } from '@brix-ui/theme/mixin';

import type { ButtonProps } from './button.props';

type Intent = NonNullable<ButtonProps['intent']>;

type IntentMixin = (intent: Intent) => (props: WithTheme) => FlattenSimpleInterpolation;

const applyIntentStyle = <S>(intent: Intent, baseStyles: S, intentStyles: S): S => {
  if (intent === 'base') {
    return baseStyles;
  }

  return intentStyles;
};

export const disabledButtonMixin = {
  contained: css`
    background-color: var(--c-faint-weak);

    color: var(--c-faint-strong-down);
  `,
  outlined: css`
    border-color: var(--c-faint-weak-up);

    color: var(--c-faint-strong-down);
  `,
  faint: css`
    background-color: var(--c-faint-weak);

    color: var(--c-faint-strong-down);
  `,
  text: css`
    color: var(--c-faint-strong);
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
      box-shadow: ${shadow(`${intent}-strong`, 0.4)};
    }

    &:focus {
      background-color: ${`var(--c-${intent}-strong-down)`};
    }

    &:active {
      box-shadow: ${shadow(`${intent}-strong`, 0.25)};
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
      box-shadow: ${shadow(`${intent}-strong`, 0.25)};
    }

    &:focus {
      border: 1px solid ${applyIntentStyle(intent, `var(--c-faint-strong)`, `var(--c-${intent}-weak-up)`)};

      color: ${`var(--c-${intent}-strong-down)`};
    }

    &:active {
      box-shadow: ${shadow(`${intent}-strong`, 0.15)};
    }
  ` as FlattenSimpleInterpolation;
};

const faintButtonMixin: IntentMixin = (intent) => () => {
  return css`
    color: ${`var(--c-${intent}-strong)`};

    &,
    &:active:focus,
    &:hover:focus {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-weak)`, `var(--c-${intent}-weak-down)`)};
    }

    &:hover {
      box-shadow: ${shadow(`${intent}-strong`, Number(applyIntentStyle(intent, 0.05, 0.1)))};
    }

    &:focus {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-weak-up)`, `var(--c-${intent}-weak)`)};
    }

    &:active {
      box-shadow: ${shadow(`${intent}-strong`, 0.075)};
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
      background-color: ${applyIntentStyle(intent, `var(--c-faint-weak)`, `var(--c-${intent}-weak-down)`)};
    }

    &:focus {
      text-shadow: ${shadow(`${intent}-strong`, 0.5)};

      color: ${`var(--c-${intent}-strong-down)`};
    }

    &:active {
      background-color: ${applyIntentStyle(intent, `var(--c-faint-weak)`, `var(--c-${intent}-weak-down)`)};

      text-shadow: ${shadow(`${intent}-strong`, 0.25)};
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
