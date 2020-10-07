import styled, { css } from 'styled-components';

import Input from '../../_internal/input';

const TimeInput = styled(Input)(
  () => css`
    width: 36px;

    padding: 2px 6px 4px;

    border: none;

    input {
      text-align: center;
    }

    &:hover {
      box-shadow: none;
    }

    &:focus-within {
      background-color: var(--c-faint-weak);

      input::placeholder {
        opacity: 1;
      }
    }
  `
);

const Styled = { TimeInput };

export default Styled;
