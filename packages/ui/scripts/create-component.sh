#!/usr/bin/env bash

cd src/components

read -p "Component name: " component_name

mkdir $component_name

cd $component_name

mkdir stories

# Declaration

touch ./index.d.ts

echo "import { ClassNames } from '../../theme/theme';

interface Styled {

}

export interface ${component_name}Props extends ClassNames<Styled> {}

declare const $component_name: {
  (props: ${component_name}Props): JSX.Element;
};

export default $component_name" >> ./index.d.ts

# Styled

touch ./styled.js

echo "import styled from 'styled-components';

const $component_name = styled.div;

export const Styled = { $component_name };" >> ./styled.js

# Component

touch ./index.jsx

echo "import React from 'react';
import PropTypes from 'prop-types';

import { Styled } from './styled';

export const $component_name = ({}) => {
  return (

  )
};

$component_name.propTypes = {

};" >> ./index.jsx

# Stories

touch ./stories/index.stories.jsx

echo "import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import $component_name from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const ${component_name,}Story = storiesOf('$component_name', module);" >> ./stories/index.stories.jsx
