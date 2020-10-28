import { useMemo } from 'react';

export const usePlaceholder = ({ placeholder, name }: { placeholder: string | undefined; name: string }): string => {
  return useMemo(() => placeholder ?? name[0].repeat(2).toUpperCase(), [placeholder, name]);
};
