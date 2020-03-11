import TextComponent from '../Text';
import { getTextAppearance, getTextVariant } from '../../utils';
import styled, { css } from 'styled-components';

const TextArea = styled.textarea.withConfig({ displayName: 'EditableTextTextarea' })(
  ({ isEditing, dimensions: { width, height }, ...typographyProps }) => css`
    width: ${isEditing ? `${width}px` : '100%'};
    height: ${isEditing ? `${height}px` : '100%'};

    position: absolute;
    top: 0;
    left: 0;

    outline: none;
    resize: none;
    border: none;
    background: none;

    opacity: ${isEditing ? 1 : 0};

    transition: opacity var(--transition);

    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;

    ${getTextVariant({ variant: typographyProps.variant })};
    ${getTextAppearance({ appearance: typographyProps.appearance })};
  `
);

const Text = styled(TextComponent).withConfig({ displayName: 'EditableTextText' })(
  ({ isEditing }) => css`
    opacity: ${isEditing ? 0 : 1};

    transition: opacity var(--transition);
  `
);

const Container = styled.article.withConfig({ displayName: 'EditableTextContainer' })`
  position: relative;
  overflow-wrap: break-word;
  opacity: 1;

  transition: opacity var(--transition);
`;

export const Styled = { Container, TextArea, Text };
