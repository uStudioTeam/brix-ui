import { css, FlattenSimpleInterpolation } from 'styled-components';
import { ButtonProps } from '@ustudio-ui/core/button/button.props';

const faint = '--c-faint-w';

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

const containedMixin = (color: string) => css`
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

const outlinedMixin = (color: string) => css`
  border: 1px solid var(--c-${color}-s);

  color: var(--c-${color}-s);

  &:hover {
    box-shadow: 0 2px 8px rgba(var(--c-${color}-s), 0.25);
  }

  &:active {
    border: 1px solid var(${color === 'base' ? `--c-faint-s` : `--c-${color}-w-u`});

    box-shadow: 0 2px 8px rgba(var(--c-${color}-s), 0.15);

    color: var(--c-${color}-s-d);
  }

  &:focus {
    border: 1px solid var(--c-${color}-s-d);

    color: var(--c-${color}-s-d);
  }
`;

const textMixin = (color: string) => css`
  color: var(--c-${color}-s);
  
  &:hover {
    background-color: var(${color === 'base' ? faint : `--c-${color}-w-d`});
  }
`;

const faintMixin = (color: string) => css`
  background-color: var(${color === 'base' ? faint : `--c-${color}-w-d`});
  
  color: var(--c-${color}-s);
  
  &:hover {
    box-shadow: 0 2px 8px rgba(var(--c-${color}-s), ${color === 'base' ? '0.1' : '0.15'});
  }
  
  &:active {
    background-color: var(${color === 'base' ? faint : `--c-${color}-w`});
    box-shadow: 0 2px 8px rgba(var(--c-${color}-s), ${color === 'base' ? '0.075' : '0.15'});
    
    color: var(--c-${color}-s-d);
  }
  
  &:focus {
    background-color: var(${color === 'base' ? faint : `--c-${color}-w`});
  }
`;

export const buttonsList: Record<
  Exclude<ButtonProps['appearance'], undefined>,
  Record<Exclude<ButtonProps['intent'], undefined>, FlattenSimpleInterpolation>
> = {
  contained: {
    base: containedMixin('base'),
    accent: containedMixin('accent'),
    critical: containedMixin('critical'),
    success: containedMixin('success'),
  },
  outlined: {
    base: outlinedMixin('base'),
    accent: outlinedMixin('accent'),
    critical: outlinedMixin('critical'),
    success: outlinedMixin('success'),
  },
  text: {
    base: css`
      color: var(--c-base-s);

      &:hover {
        background-color: var(--c-faint-w);
      }

      &:active {
        background-color: var(--c-faint-w);

        text-shadow: 0 2px 8px rgba(var(--c-base-s), 0.3);
      }

      &:focus {
        border-radius: 15px;

        box-shadow: 0 2px 8px hsla(var(--c-base-s), 0.3);
      }
    `,
    accent: css`
      color: var(--c-accent-s);

      &:hover {
        background-color: var(--c-accent-w-d);
      }

      &:active {
        color: var(--c-accent-s-d);

        background-color: var(--c-accent-w-d);

        text-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.3);
      }

      &:focus {
        border-radius: 15px;

        box-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.25);

        color: var(--c-accent-s-d);
      }
    `,
    critical: css`
      color: var(--c-critical-s);

      &:hover {
        background-color: var(--c-critical-w-d);
      }

      &:active {
        color: var(--c-critical-s-d);

        background-color: var(--c-critical-w-d);

        text-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.3);
      }

      &:focus {
        border-radius: 15px;

        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.25);

        color: var(--c-critical-s-d);
      }
    `,
    success: css`
      color: var(--c-success-s);

      &:hover {
        background-color: var(--c-success-w-d);
      }

      &:active {
        background-color: var(--c-success-w-d);

        color: var(--c-success-s-d);

        text-shadow: 0 2px 8px rgba(var(--c-success-s), 0.3);
      }

      &:focus {
        border-radius: 15px;

        box-shadow: 0 2px 8px rgba(var(--c-success-s), 0.25);

        color: var(--c-success-s-d);
      }
    `,
  },
  faint: {
    base: faintMixin('base'),
    accent: faintMixin('accent'),
    critical: faintMixin('critical'),
    success: faintMixin('success'),
  },
};
