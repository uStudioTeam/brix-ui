import { forwardRef, ForwardRefExoticComponent, ForwardRefRenderFunction, PropsWithoutRef, RefAttributes } from 'react';

export const intrinsicComponent = <P = {}, E = HTMLElement>(
  render: ForwardRefRenderFunction<E, P>,
  displayName?: string
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>> => {
  const component = forwardRef<E, P>(render);
  component.displayName = displayName || render.name;

  return component;
};
