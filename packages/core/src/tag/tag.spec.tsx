import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Tag from './tag.component';
import type { TagProps } from './tag.props';

const tagId = 'tag';

const renderWithProps = <P extends Partial<TagProps>>(props: P = {} as P) => {
  return render(<Tag data-testid={tagId} {...props} />);
};

describe('<Tag />', () => {
  describe('background and color', () => {
    describe('empty value', () => {
      it('should not apply default background', () => {
        const { getByTestId } = renderWithProps();

        expect(getByTestId(tagId)).toHaveStyleRule('background-color', "red");
      });
    });
  });
});
