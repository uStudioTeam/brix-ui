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
  isDefaultOpen = false,
  isDisabled = false,
  classNames,
  className = '',
}) => {
  const [isOpen, setOpen] = useState(isDefaultOpen || false);

  const { ref, height } = useDropdown(isOpen, 'height');

  useKeyPressClose(setOpen);

  return (
    <Styled.DropdownContainer isOpen={isOpen} classNames={classNames} className={className}>
      <Styled.Title
        onClick={() => {
          onChange && onChange();
          setOpen(!isOpen);
        }}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-labelledby={name}
        classNames={classNames}
      >
        {title}

        <Styled.TitleIcon classNames={classNames}>{cloneElement(icon, { angle: isOpen ? 0 : -180 })}</Styled.TitleIcon>
      </Styled.Title>

      <Styled.Dropdown dropdownHeight={height} classNames={classNames}>
        <Styled.Content ref={ref} classNames={classNames}>
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
  isDefaultOpen: false,
  isDisabled: false,
};

export default Dropdown;
