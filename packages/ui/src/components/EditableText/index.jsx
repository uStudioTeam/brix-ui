import React, { cloneElement, forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';
import { useKeyPressClose } from '../../hooks';

import { Styled } from './styles';
import { editableTextUtils } from './utils';

const EditableText = forwardRef(function EditableText(
  { children: value, onChange, isDefaultEditable = false, classNames, className = '', icon, variant, appearance },
  ref
) {
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
    <Styled.EditableText classNames={classNames} className={className}>
      <Styled.Text
        ref={textRef}
        isEditing={isEditing}
        variant={variant}
        appearance={appearance}
        classNames={classNames}
      >
        {value}
      </Styled.Text>

      <Styled.TextArea
        ref={ref}
        variant={variant}
        appearance={appearance}
        autoFocus={isDefaultEditable}
        isEditing={isEditing}
        dimensions={textDimensions}
        value={value}
        onChange={handleChange}
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        onKeyDown={handleKeyDown}
        classNames={classNames}
      />

      {icon ? cloneElement(icon, { isEditing }) : <Styled.Icon name="pen" isEditing={isEditing} classNames={classNames} />}
    </Styled.EditableText>
  );
});

EditableText.displayName = 'EditableText';

EditableText.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: common.text,
  appearance: PropTypes.oneOf(['regular', 'italic', 'underlined', 'bold']),
  isDefaultEditable: PropTypes.bool,
  icon: PropTypes.node,
  ...classNames(Object.keys(Styled)),
};

EditableText.defaultProps = {
  isDefaultEditable: false,
};

export default EditableText;
