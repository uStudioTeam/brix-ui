import { css, FlattenSimpleInterpolation } from 'styled-components';

import { ButtonProps } from '@ustudio-ui/core/button';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
import { ColorSpace, Color } from '@ustudio-ui/types/palette';
import { Values } from '@ustudio-ui/utils/types';

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

const applyShadow = (color: Values<typeof Color>, alpha: number): FlattenSimpleInterpolation => {
  return css`${({theme}) => {
    return ColorTransformer.toHsla(ColorTransformer.toTuple(theme.palette[color], ColorSpace.HSL), alpha);
  }}`
};

export const disabledButtonsList = {
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

const containedButton = (intent: ButtonProps['intent']) => css`
  border: 1px solid transparent;
  
  background-color: var(--c-${intent}-s);

  color: var(--c-base-w);

  &:hover {
    box-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, 0.4)};
  }
  
  &:focus {
    background-color: var(--c-${intent}-s-d);
  }

  &:active {
    background-color: var(--c-${intent}-s-d);
    box-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, 0.3)};
    
    color: ${applyIntentStyle(intent, `var(--c-faint-s)`, `var(--c-${intent}-w-u)`)};
  }
`;

const outlinedButton = (intent: string) => css`
  border: 1px solid var(--c-${intent}-s);
  background-color: var(--c-base-w);

  color: var(--c-${intent}-s);

  &:hover {
    box-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, 0.25)};
  }
  
  &:focus {
    border: 1px solid ${applyIntentStyle(intent, 'var(--c-faint-s)', `var(--c-${intent}-w-u)`)}; var(--c-${intent}-s-d);

    color: var(--c-${intent}-s-d);
  }

  &:active {
    border: 1px solid ${applyIntentStyle(intent, 'var(--c-faint-s)', `var(--c-${intent}-w-u)`)};

    box-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, 0.15)};

    color: var(--c-${intent}-s-d);
  }
`;

const faintButton = (intent: string) => css`
  border: 1px solid transparent;
  
  background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};

  color: var(--c-${intent}-s);

  &:hover {
    box-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, Number(applyIntentStyle(intent, '0.1', '0.15')))};
  }
  
  &:focus {
    background-color: ${applyIntentStyle(intent, `var(--c-faint-w-u)`, `var(--c-${intent}-w)`)};
  }

  &:active {
    background-color: ${applyIntentStyle(intent, 'var(--c-faint-w-u)', `var(--c-${intent}-w)`)};
    box-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, Number(applyIntentStyle(intent, '0.075', '0.15')))}; 

    color: var(--c-${intent}-s-d);
  }
`;

  const textButton = (intent: string) => css`
  border: 1px solid transparent;
  
  color: var(--c-${intent}-s);

  &:hover {
    background-color: ${applyIntentStyle(intent, `var(--c-faint-w)`, `var(--c-${intent}-w-d)`)};
  }
  
  &:focus {
    text-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, 0.5)}; 

    color: var(--c-${intent}-s-d);
  }

  &:active {
    background-color: ${applyIntentStyle(intent, 'var(--c-faint-w)', `var(--c-${intent}-w-d)`)};

    color: var(--c-${intent}-s-d);

    text-shadow: 0 2px 8px ${applyShadow(`${intent}-s`, 0.5)};
  }
`;

export const buttonsList: Record<Exclude<ButtonProps['appearance'], undefined>,
  Record<Exclude<ButtonProps['intent'], undefined>, FlattenSimpleInterpolation>> = {
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
