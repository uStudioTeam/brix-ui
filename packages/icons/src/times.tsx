import React from 'react';

import { classNames, intrinsicComponent } from '@brix-ui/utils/functions';

import type { IconProps } from './icon.props';

const Times = intrinsicComponent<IconProps, SVGSVGElement>(function Times({ className, ...props }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 11 11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('times', className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.34103 5.19997L2.17796 3.03688C1.94076 2.79968 1.94076 2.4151 2.17796 2.1779C2.41516 1.9407 2.79973 1.9407 3.03693 2.1779L5.2 4.34099L7.36307 2.1779C7.60027 1.9407 7.98484 1.9407 8.22204 2.1779C8.45924 2.4151 8.45924 2.79968 8.22204 3.03688L6.05897 5.19997L8.2221 7.36312C8.4593 7.60032 8.4593 7.9849 8.2221 8.2221C7.9849 8.4593 7.60033 8.4593 7.36313 8.2221L5.2 6.05895L3.03687 8.2221C2.79967 8.4593 2.4151 8.4593 2.1779 8.2221C1.9407 7.9849 1.9407 7.60032 2.1779 7.36312L4.34103 5.19997Z"
      />
    </svg>
  );
});

export default Times;
