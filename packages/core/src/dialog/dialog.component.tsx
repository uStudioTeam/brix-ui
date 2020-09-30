import React, { WeakValidationMap } from 'react';
import PT from 'prop-types';

import { applyPolymorphicFunctionProp, intrinsicComponent } from '@brix-ui/utils/functions';
import { useModal } from '@brix-ui/contexts/modal';
import useBreakpointProps from '@brix-ui/hooks/use-breakpoint-props';
import { useTheme } from '@brix-ui/theme';
import type { With } from '@brix-ui/utils/types';
import {
  breakpointProps,
  disclosable,
  polymorphicBreakpointProp,
  stylableComponent,
  unmountable,
} from '@brix-ui/prop-types/common';
import { TextAlign } from '@brix-ui/types/typography';

import Portal from '../portal';

import type { DialogBreakpointProps, DialogProps } from './dialog.props';
import Styled from './dialog.styles';

const Dialog = intrinsicComponent<DialogProps, HTMLDialogElement>(function Dialog(
  {
    children,
    isOpen,
    onOpen,
    onChange,
    onClose,
    unmountOnExit,
    title,
    titleAlign,
    top,
    margin,
    maxWidth,
    maxHeight,
    sm,
    md,
    lg,
    xl,
    ...props
  },
  ref
) {
  const { breakpoints } = useTheme();

  const { currentBreakpoint, ...currentBreakpointProps } = useBreakpointProps(
    {
      sm,
      md,
      lg,
      xl,
      top,
      margin,
      maxWidth,
      maxHeight,
    },
    breakpoints
  ) as With<DialogBreakpointProps, { currentBreakpoint: number }>;

  const { shouldBeOpen, shouldMount, toggle } = useModal({ isOpen, onOpen, onChange, onClose, unmountOnExit });

  return shouldMount ? (
    <Portal>
      <Styled.Dialog
        forwardedAs="dialog"
        ref={ref}
        isOpen={shouldBeOpen}
        open={shouldBeOpen}
        $top={applyPolymorphicFunctionProp(currentBreakpointProps.top, currentBreakpoint) || '33%'}
        $margin={applyPolymorphicFunctionProp(currentBreakpointProps.margin, currentBreakpoint) || '2rem'}
        $maxWidth={
          applyPolymorphicFunctionProp(currentBreakpointProps.maxWidth, currentBreakpoint) || `${currentBreakpoint}px`
        }
        $maxHeight={applyPolymorphicFunctionProp(currentBreakpointProps.maxHeight, currentBreakpoint) || 'fit-content'}
        aria-modal="true"
        aria-labelledby={title ? 'dialog_title' : undefined}
        aria-describedby={title ? 'dialog_title' : undefined}
        {...props}
      >
        <Styled.Header $titleAlign={titleAlign}>
          {title && (
            <Styled.Title id="dialog_title" align={titleAlign}>
              {title}
            </Styled.Title>
          )}

          <Styled.CloseContainer>
            <Styled.CloseButton type="button" onClick={() => toggle(false)}>
              <Styled.CloseIcon />
            </Styled.CloseButton>
          </Styled.CloseContainer>
        </Styled.Header>

        <Styled.Body>{children}</Styled.Body>
      </Styled.Dialog>
    </Portal>
  ) : null;
});

const dialogBreakpointData = {
  margin: polymorphicBreakpointProp(),
  maxWidth: polymorphicBreakpointProp(),
  maxHeight: polymorphicBreakpointProp(),
};

Dialog.propTypes = {
  title: PT.string,
  titleAlign: PT.oneOf([TextAlign.Left, TextAlign.Center]),

  ...breakpointProps(dialogBreakpointData),
  ...disclosable,
  ...unmountable,
  ...stylableComponent(Styled),
} as WeakValidationMap<DialogProps>;

export default Dialog;
