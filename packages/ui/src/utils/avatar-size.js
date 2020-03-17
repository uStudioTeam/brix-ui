import { css } from 'styled-components';
import { Mixin } from '../theme';

export function avatarSize(size = 'medium') {
  const avatarSize = {
    small: css`
      width: 1.75rem;
      height: 1.75rem;
      border-radius: 1.75rem;

      ${Mixin.Font.bodySmall()};
    `,
    medium: css`
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 2.75rem;

      ${Mixin.Font.h5()};
    `,
    large: css`
      width: 4rem;
      height: 4rem;
      border-radius: 4rem;

      ${Mixin.Font.h2()};
    `,
  };

  if (avatarSize[size]) {
    return avatarSize[size];
  } else {
    console.error(`Invalid Avatar size. Use ${Object.keys(avatarSize)}`);
    return avatarSize.medium;
  }
}
