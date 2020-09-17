import type { InputProps } from '../_internal/input';

export interface TextInputProps extends InputProps<string> {
  type?: 'text' | 'password' | 'email' | 'url' | 'search';
  inputMode?: 'text' | 'password' | 'email' | 'url' | 'search';
}
