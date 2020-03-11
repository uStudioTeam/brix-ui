import React, { cloneElement, useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../internal/Icon';
import { classNames } from '../../utils';
import { useDropdown, useKeyPressClose } from '../../hooks';

import { Styled } from './styled';

const Dropdown = ({
  isDefaultOpen = false,
  onChange,
  isDisabled = false,
  title,
  children,
  name,
  classNames,
  className,
  icon = <Icon name="chevron" />,
}) => {
  const [isOpen, setOpen] = useState(isDefaultOpen ?? false);

  const { ref, height } = useDropdown(isOpen, 'height');

  useKeyPressClose(setOpen);

  return (
    <Styled.Container isOpen={isOpen} className={`${classNames?.Container || ''} ${className || ''}`}>
      <Styled.Title
        onClick={() => {
          onChange && onChange();
          setOpen(!isOpen);
        }}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-labelledby={`Dropdown ${name || ''}`}
        className={classNames?.Title || ''}
      >
        {title}

        <Styled.TitleIcon className={classNames?.TitleIcon || ''}>
          {cloneElement(icon, { angle: isOpen ? 0 : -180 })}
        </Styled.TitleIcon>
      </Styled.Title>

      <Styled.Dropdown dropdownHeight={height} className={classNames?.Dropdown || ''}>
        <Styled.Content ref={ref} className={classNames?.Content || ''}>
          {children}
        </Styled.Content>
      </Styled.Dropdown>
    </Styled.Container>
  );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  isDefaultOpen: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.node,
  ...classNames(Object.keys(Styled)),
};

Dropdown.defaultProps = {
  isDefaultOpen: false,
  isDisabled: false,
};

export default Dropdown;
