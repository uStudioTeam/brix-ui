import { css, FlattenSimpleInterpolation } from 'styled-components';
import { ButtonProps } from '@ustudio-ui/core/button/button.props';

type IntentStyleType = (
  intent: string,
  baseStyles: string,
  intentStyles: string
) => string;

const applyIntentStyle: IntentStyleType = (intent, baseStyles, intentStyles) => {
  if (intent === 'base') {
    return baseStyles;
  }

  return intentStyles;
};

export const disabledButton = {
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
    background-color: var(--c-faint-w-u);

    color: var(--c-faint-s);
  `,
};

const containedButton = (color: string) => css`
  background-color: var(--c-${color}-s);

  color: var(--c-${color}-w);

  &:hover {
    box-shadow: 0 2px 8px rgba(var(--c-${color}-s), 0.4);
  }

  &:active {
    background-color: var(--c-${color}-s-d);
    box-shadow: 0 2px 8px rgba(var(--c-${color}-s), 0.3);
  }

  &:focus {
    background-color: var(--c-${color}-s-d);
  }
`;

const outlinedButton = (intent: string) => css`
  border: 1px solid var(--c-${intent}-s);

  color: var(--c-${intent}-s);

  &:hover {
    box-shadow: 0 2px 8px rgba(var(--c-${intent}-s), 0.25);
  }

  &:active {
    border: 1px solid ${applyIntentStyle(intent, 'var(--c-faint-s)', `var(--c-${intent}-w-u)`)};

    box-shadow: 0 2px 8px rgba(var(--c-${intent}-s), 0.15);

    color: var(--c-${intent}-s-d);
  }

  &:focus {
    border: 1px solid var(--c-${intent}-s-d);

    color: var(--c-${intent}-s-d);
  }
`;

const textButton = (intent: string) => css`
  color: var(--c-${intent}-s);

  &:hover {
    background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};
  }

  &:active {
    background-color: ${applyIntentStyle(intent, '--c-faint-w', `var(--c-${intent}-w-d)`)};

    color: ${applyIntentStyle(intent, `var(--c-${intent}-s)`,`var(--c-${intent}-s-d)`)};

    text-shadow: 0 2px 8px rgba(var(--c-${intent}-s), 0.3);
  }

  &:focus {
    border-radius: 15px;

    box-shadow: 0 2px 8px rgba(var(--c-${intent}-s), ${applyIntentStyle(intent, '0.3', '0.25')});

    color: ${applyIntentStyle(intent, `var(--c-${intent}-s)`, `var(--c-${intent}-s-d)`)};
  }
`;

const faintButton = (intent: string) => css`
  background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};

  color: var(--c-${intent}-s);

  &:hover {
    box-shadow: 0 2px 8px rgba(var(--c-${intent}-s), ${applyIntentStyle(intent, '0.1', '0.15')});
  }

  &:active {
    background-color: ${applyIntentStyle(intent, 'var(--c-faint-w)', `var(--c-${intent}-w)`)};
    box-shadow: 0 2px 8px rgba(var(--c-${intent}-s), ${applyIntentStyle(intent, '0.075', '0.15')});

    color: var(--c-${intent}-s-d);
  }

  &:focus {
    background-color: ${applyIntentStyle(intent, 'var(--c-faint-w)', `var(--c-${intent}-w)`)};
  }
`;

export const buttonsList: Record<
  Exclude<ButtonProps['appearance'], undefined>,
  Record<Exclude<ButtonProps['intent'], undefined>, FlattenSimpleInterpolation>
> = {
  contained: {
    base: containedButton('base'),
    accent: containedButton('accent'),
    critical: containedButton('critical'),
    success: containedButton('success'),
  },
  outlined: {
    base: outlinedButton('base'),
    accent: outlinedButton('accent'),
    critical: outlinedButton('critical'),
    success: outlinedButton('success'),
  },
  text: {
    base: textButton('base'),
    accent: textButton('accent'),
    critical: textButton('critical'),
    success: textButton('success'),
  },
  faint: {
    base: faintButton('base'),
    accent: faintButton('accent'),
    critical: faintButton('critical'),
    success: faintButton('success'),
  },
};
