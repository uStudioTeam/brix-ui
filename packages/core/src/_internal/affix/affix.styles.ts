import styled from 'styled-components';

const Affix = styled.span`
  &:first-child {
    margin-right: var(--affix-indent);
  }

  &:last-child {
    margin-left: var(--affix-indent);
  }
`;

const Styled = { Affix };

export default Styled;
