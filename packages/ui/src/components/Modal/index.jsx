import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Portal from '../internal/Portal';
import Icon from '../internal/Icon';

import { classNames } from '../../utils';
import { useKeyPressClose } from '../../hooks';

import { Styled } from './styled';

const Modal = ({ isOpen, onChange, title, children, classNames, className }) => {
  useKeyPressClose(onChange);

  return (
    <Portal>
      <>
        <Styled.Modal
          isOpen={isOpen}
          aria-hidden={!isOpen}
          direction="column"
          classNames={{ Flex: classNames?.Modal || '' }}
          className={className || ''}
        >
          <Styled.Header
            alignment={{
              horizontal: 'space-between',
              vertical: 'center',
            }}
            classNames={{ Flex: classNames?.Header || '' }}
          >
            <Text variant="h3" classNames={{ Text: classNames?.Title || '' }}>
              {title}
            </Text>

            <Styled.Icon
              type="button"
              aria-labelledby={`Close ${title} modal`}
              onClick={() => onChange(false)}
              className={classNames?.Icon || ''}
            >
              <Icon name="times" size="large" />
            </Styled.Icon>
          </Styled.Header>

          <Styled.Content classNames={{ Flex: classNames?.Content || '' }}>{children}</Styled.Content>
        </Styled.Modal>

        <Styled.Overlay
          aria-hidden={!isOpen}
          aria-labelledby={`${title} modal overlay`}
          onClick={() => onChange(false)}
        />
      </>
    </Portal>
  );
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  ...classNames(Object.keys(Styled)),
};

export default Modal;
