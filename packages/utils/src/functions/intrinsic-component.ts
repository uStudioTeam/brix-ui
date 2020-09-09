import { forwardRef, ForwardRefExoticComponent, ForwardRefRenderFunction, PropsWithoutRef, RefAttributes } from 'react';

export const intrinsicComponent = <P = Record<string, unknown>, E = HTMLElement>(
  render: ForwardRefRenderFunction<E, P>,
  displayName?: string
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>> => {
  const component = forwardRef<E, P>(render);
  // eslint-disable-next-line immutable/no-mutation
  component.displayName = displayName || render.name;

  return component;
};
