import { ReactNode } from 'react';

interface Styled {
  InputContainer;
  Input;
  Prefix;
  Suffix;
}

interface InputProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
}
