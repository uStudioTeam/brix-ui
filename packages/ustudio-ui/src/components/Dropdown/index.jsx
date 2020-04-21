import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../internal/Icon';
import { classNames } from '../../utils';
import { useDropdown, useKeyPressClose } from '../../hooks';

import { Styled } from './styles';

const Dropdown = ({
  children,
  name,
  onChange,
  title,
  icon = <Icon name="chevron" />,
  isDefaultOpen,
  isDisabled = false,
  styled,
  classNames,
  className = '',
}) => {
  const [internalIsOpen, setOpen] = useState(isDefaultOpen || false);
  const isOpen = onChange && isDefaultOpen !== undefined ? isDefaultOpen : internalIsOpen;

  const { ref, height } = useDropdown(isOpen, 'height');

  useKeyPressClose(setOpen);

  return (
    <Styled.DropdownContainer isOpen={isOpen} $classNames={classNames} className={className} $styled={styled}>
      <Styled.Title
        onClick={() => {
          if (onChange && isDefaultOpen !== undefined) {
            onChange();
            return;
          }

          if (onChange) {
            onChange();
            setOpen(!isOpen);
            return;
          }

          setOpen(!isOpen);
        }}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-labelledby={name}
        $classNames={classNames}
        $styled={styled}
      >
        {title}

        <Styled.TitleIcon $classNames={classNames} $styled={styled}>
          {cloneElement(icon, { angle: isOpen ? 0 : -180 })}
        </Styled.TitleIcon>
      </Styled.Title>

      <Styled.Dropdown dropdownHeight={height} $classNames={classNames} $styled={styled}>
        <Styled.Content ref={ref} $classNames={classNames} $styled={styled}>
          {children}
        </Styled.Content>
      </Styled.Dropdown>
    </Styled.DropdownContainer>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.node.isRequired,
  icon: PropTypes.element,
  isDefaultOpen: PropTypes.bool,
  isDisabled: PropTypes.bool,
  ...classNames(Object.keys(Styled)),
};

Dropdown.defaultProps = {
  isDisabled: false,
};

export default Dropdown;
