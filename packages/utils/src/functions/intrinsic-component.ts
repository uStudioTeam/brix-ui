import {
  forwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  MutableRefObject,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
} from 'react';

interface RenderFunction<P, E>
  extends Pick<ForwardRefRenderFunction<E, P>, 'defaultProps' | 'displayName' | 'propTypes'> {
  (props: P, ref: ((instance: E | null) => void) | MutableRefObject<E | null> | null): ReactElement | null;
}

export const intrinsicComponent = <P = Record<string, unknown>, E = HTMLElement>(
  render: RenderFunction<P, E>,
  displayName?: string
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>> => {
  const component = forwardRef<E, P>(render);
  // eslint-disable-next-line immutable/no-mutation
  component.displayName = displayName || render.name;

  return component;
};
