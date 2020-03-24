import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Portal from '../internal/Portal';
import Icon from '../internal/Icon';

import { classNames } from '../../utils';
import { useKeyPressClose } from '../../hooks';

import { Styled } from './styles';

const Modal = ({ children, isOpen, onChange, title, classNames, className = '' }) => {
  useKeyPressClose(onChange);

  return (
    <Portal>
      <>
        <Styled.Modal
          isOpen={isOpen}
          aria-hidden={!isOpen}
          direction="column"
          classNames={classNames}
          className={className}
        >
          <Styled.Header
            alignment={{
              horizontal: 'space-between',
              vertical: 'center',
            }}
            classNames={classNames}
          >
            <Text variant="h3" classNames={{ Text: classNames?.Title }}>
              {title}
            </Text>

            <Styled.Icon
              type="button"
              aria-labelledby={`Close ${title}`}
              onClick={() => onChange(false)}
              classNames={classNames}
            >
              <Icon name="close" size="large" />
            </Styled.Icon>
          </Styled.Header>

          <Styled.Content classNames={classNames}>{children}</Styled.Content>
        </Styled.Modal>

        <Styled.Overlay
          aria-hidden={!isOpen}
          aria-labelledby={`${title} overlay`}
          onClick={() => onChange(false)}
          classNames={classNames}
        />
      </>
    </Portal>
  );
};

Modal.displayName = 'Modal';

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  ...classNames([...Object.keys(Styled), 'Title']),
};

export default Modal;
