import { css } from 'styled-components';

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

export const buttons = {
  contained: {
    base: css`
      background-color: var(--c-base-s);

      color: var(--c-base-w);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-base-s), 0.4);
      }

      &:active {
        background-color: var(--c-base-s-d);
        box-shadow: 0 2px 8px rgba(var(--c-base-s), 0.3);
      }

      &:focus {
        background-color: var(--c-base-s-d);
      }
    `,
    accent: css`
      background-color: var(--c-accent-s);

      color: var(--c-accent-w);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.4);
      }

      &:active {
        background-color: var(--c-accent-s-d);
        box-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.3);
      }

      &:focus {
        background-color: var(--c-accent-s-d);
      }
    `,
    critical: css`
      background-color: avr(--c-critical-s);

      color: var(--c-critical-w);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.4);
      }

      &:active {
        background-color: var(--c-critical-s-d);
        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.3);
      }

      &:focus {
        background-color: var(--c-critical-s-d);
      }
    `,
    success: css`
      background-color: var(--c-success-s);

      color: var(--c-success-w);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-success-s), 0.4);
      }

      &:active {
        background-color: var(--c-success-s-d);
        box-shadow: 0 2px 8px rgba(var(--c-success-s), 0.3);
      }

      &:focus {
        background-color: var(--c-success-s-d);
      }
    `,
  },
  outlined: {
    base: css`
      border: 1px solid var(--c-base-s);

      color: var(--c-base-s);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-base-s), 0.25);
      }

      &:active {
        border: 1px solid var(--c-faint-s);

        box-shadow: 0 2px 8px rgba(var(--c-base-s), 0.15);

        color: var(--c-base-s-d);
      }

      &:focus {
        border: 1px solid var(--c-base-s-d);

        color: var(--c-base-s-d);
      }
    `,
    accent: css`
      border: 1px solid var(--c-accent-s);

      color: var(--c-accent-s);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.25);
      }

      &:active {
        border: 1px solid var(--c-accent-w-u);

        box-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.15);

        color: var(--c-accent-s-d);
      }

      &:focus {
        border: 1px solid var(--c-accent-s-d);

        color: var(--c-accent-s-d);
      }
    `,
    critical: css`
      border: 1px solid var(--c-critical-s);

      color: var(--c-critical-s);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.25);
      }

      &:active {
        border: 1px solid var(--c-critical-w-u);

        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.15);

        color: var(--c-critical-s-d);
      }

      &:focus {
        border: 1px solid var(--c-critical-s-d);

        color: var(--c-critical-s-d);
      }
    `,
    success: css`
      border: 1px solid var(--c-success-s);
       
      color: var(--c-success-s); 
      
      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-success-s), 0.25);
      }
      
      &:active {
        border: 1px solid var(--c-success-w-u);
        
        box-shadow: 0 2px 8px rgba(var(--c-success-s), 0.15);
        
        color: var(--c-success-s-d);
      }
      
      &:focus {
        border: 1px solid var(--c-success-s-d);
         
        color: var(--c-success-s-d); 
    `,
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

        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.24);

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
    base: css`
      background-color: var(--c-faint-w);

      color: var(--c-base-s);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-base-s), 0.1);
      }

      &:active {
        background-color: var(--c-faint-w);
        box-shadow: 0 2px 8px rgba(var(--c-base-s), 0.075);

        color: var(--c-base-s-d);
      }

      &:focus {
        background-color: var(--c-faint-w);
      }
    `,
    accent: css`
      background-color: var(--c-accent-w-d);

      color: var(--c-accent-s);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.15);
      }

      &:active {
        background-color: var(--c-accent-w);
        box-shadow: 0 2px 8px rgba(var(--c-accent-s), 0.15);

        color: var(--c-accent-s-d);
      }

      &:focus {
        background-color: var(--c-accent-w);
      }
    `,
    critical: css`
      background-color: var(--c-critical-w-d);

      color: var(--c-critical-s);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.15);
      }

      &:active {
        background-color: var(--c-critical-w);
        box-shadow: 0 2px 8px rgba(var(--c-critical-s), 0.15);

        color: var(--c-critical-s-d);
      }

      &:focus {
        background-color: var(--c-critical-w);
      }
    `,
    success: css`
      background-color: var(--c-success-w-d);

      color: var(--c-success-s);

      &:hover {
        box-shadow: 0 2px 8px rgba(var(--c-success-s), 0.15);
      }

      &:active {
        background-color: var(--c-success-w);
        box-shadow: 0 2px 8px rgba(var(--c-success-s), 0.15);

        color: var(--c-success-s-d);
      }

      &:focus {
        background-color: var(--c-success-w);
      }
    `,
  },
};
