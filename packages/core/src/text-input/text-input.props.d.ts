import type { InputProps } from '../../modules/input';

export interface TextInputProps extends InputProps<string> {
  type: 'text' | 'password' | 'email' | 'url' | 'search';
}
