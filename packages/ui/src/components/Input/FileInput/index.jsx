import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, inputProps } from '../../../utils';

import { StyledFileInput as Styled } from '../styled';

const FileInput = forwardRef(function FileInput(
  {
    label,
    buttonValue = 'Upload',
    value,
    onChange,
    multiple = false,
    isDisabled = false,
    isRequired = false,
    prefix,
    suffix,
    classNames,
    className,
    ...htmlAttributes
  },
  ref
) {
  const [fileList, setFileList] = useState();

  return (
    <Styled.FileInputWrapper className={`${classNames?.FileInputWrapper || ''} ${className || ''}`} isDisabled={isDisabled}>
      <Styled.FileInputContainer isDisabled={isDisabled} className={classNames?.FileInputContainer || ''}>
        {prefix && <Styled.Prefix className={classNames?.Prefix || ''}>{prefix}</Styled.Prefix>}

        <Styled.HiddenFileInput
          ref={ref}
          type="file"
          name={label}
          value={fileList ?? ''}
          onChange={({ target: { files, value: fileNames } }) => {
            onChange(files);
            setFileList(fileNames);
          }}
          multiple={multiple}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          required={isRequired}
          aria-required={isRequired}
          aria-labelledby={`${label} file input`}
          className={`${classNames?.HiddenFileInput || ''} ${className || ''}`}
          {...htmlAttributes}
        />

        <Styled.FileInput as="div" value={value} className={classNames?.FileInput || ''}>
          {`${
            Array.from(value ?? {}).length
              ? Array.from(value)
                ?.map(file => file.name)
                .join(', ')
              : htmlAttributes?.placeholder || label
          }`}
        </Styled.FileInput>

        {suffix && <Styled.Suffix className={classNames?.Suffix || ''}>{suffix}</Styled.Suffix>}
      </Styled.FileInputContainer>

      <Styled.FileInputButton
        as="div"
        disabled={isDisabled}
        appearance="contained"
        intent="primary"
        classNames={{ Button: classNames?.FileInputButton }}
        isDisabled={isDisabled}
      >
        {buttonValue}
      </Styled.FileInputButton>
    </Styled.FileInputWrapper>
  );
});

FileInput.displayName = 'FileInput';

FileInput.propTypes = {
  ...inputProps(PropTypes.object),
  buttonValue: PropTypes.string,
  multiple: PropTypes.bool,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  ...classNames(Object.keys(Styled)),
};

FileInput.defaultProps = {
  buttonValue: 'Upload',
  multiple: false,
  isDisabled: false,
  isRequired: false,
};

export default FileInput;
