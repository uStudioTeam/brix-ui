import styled from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

const Button = styled.button`
  display: inline-block;
  padding: 4px 16px;

  border-radius: 2px;

  ${font.body.p};
  text-align: center;
`;

const Styled = applyDisplayNames({ Button });

export default Styled;
