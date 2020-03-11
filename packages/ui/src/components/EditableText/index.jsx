import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';
import { useKeyPressClose } from '../../hooks';

import { Styled } from './styled';

const EditableText = ({ defaultEditing = false, children: value, onChange, classNames, className, ...textProps }) => {
  const [isEditing, setEditing] = useState(defaultEditing);
  const [textDimensions, setTextDimensions] = useState({ width: 0, height: 0 });

  const textRef = useRef(null);

  function trimText(text) {
    const regex = /[\r\n\v]}+|[\s]{2,}/gm;

    if (regex.test(text)) {
      onChange(text.replace(regex, ' '));
      return false;
    }

    return true;
  }

  useKeyPressClose(setEditing);

  useEffect(() => {
    const { width, height } = textRef.current?.getBoundingClientRect();

    setTextDimensions({ width, height });
  }, [isEditing, value]);

  useEffect(() => {
    trimText(value);
  }, []);

  return (
    <Styled.Container className={`${classNames?.Container || ''} ${className || ''}`}>
      <Styled.Text ref={textRef} isEditing={isEditing} {...textProps} className={classNames?.Text || ''}>
        {value}
      </Styled.Text>

      <Styled.TextArea
        {...textProps}
        autoFocus={defaultEditing}
        isEditing={isEditing}
        dimensions={textDimensions}
        value={value}
        onChange={({ target: { value: textareaValue } }) => {
          trimText(textareaValue) && onChange(textareaValue);
        }}
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        onKeyDown={event => {
          if ((event.keyCode === 13 && event.shiftKey) || event.keyCode === 13) event.preventDefault();
        }}
        className={classNames?.TextArea || ''}
      />
    </Styled.Container>
  );
};

EditableText.displayName = 'EditableText';

EditableText.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: common.text,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  appearance: PropTypes.oneOf(['regular', 'italic', 'underlined', 'bold']),
  defaultEditing: PropTypes.bool,
  ...classNames(Object.keys(Styled)),
};

EditableText.defaultProps = {
  defaultEditing: false,
};

export default EditableText;
