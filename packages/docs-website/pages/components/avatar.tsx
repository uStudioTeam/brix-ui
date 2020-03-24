import React from 'react';

import { Avatar } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const AvatarPage = () => {
  return (
    <ComponentInfo
      name="Avatar"
      description="Represents an avatar-like abbreviation of the first two letters supplied to the component."
      props={{
        children: {
          type: '`string`',
          required: true,
        },
        appearance: {
          type: `
            {
              background?: string;
              color?: string;
              size?: 'small' | 'medium' | 'large';
            }`,
          defaultValue: `
            {
              background: 'var(--g-primary)';
              color: 'var(--c-lightest)';
              size?: 'medium';
            }`,
        },
        isDisabled: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
      }}
      classNames={['Avatar']}
    >
      <ComponentInfoItem title="Small size">
        <Avatar appearance={{ background: 'var(--g-negative)', size: 'small' }}>Linus Torvalds</Avatar>
        <Avatar appearance={{ background: 'var(--g-positive)', color: 'var(--c-darkest)', size: 'small' }}>
          Brendan Eich
        </Avatar>
        <Avatar appearance={{ background: 'var(--c-primary)', color: 'var(--c-darkest)', size: 'small' }}>
          Dan Abramov
        </Avatar>
        <Avatar isDisabled appearance={{ size: 'small' }} classNames={{ Avatar: 'doomguy-avatar' }}>
          John Carmack
        </Avatar>
      </ComponentInfoItem>

      <ComponentInfoItem title="Medium size" description="This is a default size of the avatar component.">
        <Avatar appearance={{ background: 'var(--g-negative)' }}>Linus Torvalds</Avatar>
        <Avatar appearance={{ background: 'var(--g-positive)', color: 'var(--c-darkest)' }}>Brendan Eich</Avatar>
        <Avatar appearance={{ background: 'var(--c-primary)', color: 'var(--c-darkest)' }}>Dan Abramov</Avatar>
        <Avatar isDisabled classNames={{ Avatar: 'doomguy-avatar' }}>
          John Carmack
        </Avatar>
      </ComponentInfoItem>

      <ComponentInfoItem title="Large size">
        <Avatar appearance={{ background: 'var(--g-negative)', size: 'large' }}>Linus Torvalds</Avatar>
        <Avatar appearance={{ background: 'var(--g-positive)', color: 'var(--c-darkest)', size: 'large' }}>
          Brendan Eich
        </Avatar>
        <Avatar appearance={{ background: 'var(--c-primary)', color: 'var(--c-darkest)', size: 'large' }}>
          Dan Abramov
        </Avatar>
        <Avatar isDisabled appearance={{ size: 'large' }} classNames={{ Avatar: 'doomguy-avatar' }}>
          John Carmack
        </Avatar>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default AvatarPage;
