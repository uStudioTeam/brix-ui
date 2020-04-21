import { HTMLAttributes, ReactNode } from 'react';
import { ClassNames } from '../../theme/theme';

interface Styled {
  Text;
}

interface AnyTextProps
  extends ClassNames<Styled>,
    Partial<HTMLAttributes<HTMLElement>> {
  variant?: Variant;
  align?: 'left' | 'center' | 'right' | 'inherit';

  children: ReactNode;
}

interface ArticleProps extends AnyTextProps {
  variant?: 'article';
  appearance?: 'regular' | 'italic' | 'underlined';
}

interface BodyProps extends AnyTextProps {
  variant?: 'body';
  appearance?: 'regular' | 'italic' | 'underlined' | 'bold';
  color?: string;
}

export type TextProps = AnyTextProps | (BodyProps | ArticleProps);

type Variant = 'span' | 'code' | 'small' | 'body' | 'article' | 'caption' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';

declare const Text: {
  (props: TextProps): JSX.Element;
};

export default Text;
