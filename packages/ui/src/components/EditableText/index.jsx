import React, { cloneElement, forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, common, inputProps } from '../../utils';
import { useKeyPressClose } from '../../hooks';

import { Styled } from './styles';
import { editableTextUtils } from './utils';

const EditableText = forwardRef(function EditableText(
  {
    children,
    value: valueProp,
    defaultValue,
    onChange,
    label,
    placeholder,
    isDisabled = false,
    isRequired = false,
    isDefaultEditable = false,
    classNames,
    className = '',
    icon,
    variant,
    appearance,
  },
  ref
) {
  const value = valueProp ?? children ?? defaultValue;

  const [isEditing, setEditing] = useState(isDefaultEditable);
  const [textDimensions, setTextDimensions] = useState({ width: 0, height: 0 });
  const textRef = useRef(null);

  useKeyPressClose(setEditing);

  useEffect(() => {
    const { width, height } = textRef.current?.getBoundingClientRect();

    setTextDimensions({ width, height });
  }, [isEditing, value]);

  useEffect(() => {
    editableTextUtils.trimText({ text: value, onChange });
  }, []);

  const handleChange = ({ target: { value: textareaValue } }) => {
    editableTextUtils.trimText({ text: textareaValue, onChange }) && onChange(textareaValue);
  };

  const handleKeyDown = event => {
    if ((event.keyCode === 13 && event.shiftKey) || event.keyCode === 13) event.preventDefault();
  };

  return (
    <Styled.EditableText classNames={classNames} className={className} isDisabled={isDisabled}>
      <Styled.Text
        ref={textRef}
        isEditing={isEditing}
        variant={variant}
        appearance={appearance}
        classNames={classNames}
      >
        {value || placeholder}
      </Styled.Text>

      <Styled.TextArea
        ref={ref}
        variant={variant}
        appearance={appearance}
        autoFocus={isEditing || isDefaultEditable}
        isEditing={isEditing}
        dimensions={textDimensions}
        value={value || placeholder}
        onChange={handleChange}
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        onKeyDown={handleKeyDown}
        classNames={classNames}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        required={isRequired}
        aria-required={isRequired}
        aria-labelledby={label}
      />

      {icon ? (
        cloneElement(icon, { isEditing })
      ) : (
        <Styled.Icon name="pen" isEditing={isEditing} classNames={classNames} />
      )}
    </Styled.EditableText>
  );
});

EditableText.displayName = 'EditableText';

EditableText.propTypes = {
  ...inputProps(PropTypes.string),
  children: PropTypes.node.isRequired,
  variant: common.text,
  appearance: PropTypes.oneOf(['regular', 'italic', 'underlined', 'bold']),
  isDefaultEditable: PropTypes.bool,
  icon: PropTypes.node,
  placeholder: PropTypes.string,
  ...classNames(Object.keys(Styled)),
};

EditableText.defaultProps = {
  isDefaultEditable: false,
  isDisabled: false,
  isRequired: false,
};

export default EditableText;
