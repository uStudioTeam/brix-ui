import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';

import Spinner from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 0 } });

const spinnerStory = storiesOf('Spinner', module);

const Component = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <span>
      {isLoading && (
        <Spinner
          appearance={{ size: 32 }}
          delay={1000}
        />
      )}
    </span>
  )
}

spinnerStory.add('Primary', () => {
  return (
    <div>
      <Component />

      <Spinner
        appearance={{ size: number('Size', 32), color: text('Color', 'var(--c-primary)') }}
        delay={number('Appearance delay', 0)}
      />
    </div>
  );
});
